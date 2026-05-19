import { SYSTEM_PROMPT } from '@/lib/prompt'

export const maxDuration = 30

export async function POST(req: Request) {
  const apiKey = process.env.GROQ_API_KEY ?? ''

  if (!apiKey) {
    return Response.json({ error: 'GROQ_API_KEY not set' }, { status: 500 })
  }

  const { messages } = await req.json()

  const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'llama-3.1-8b-instant',
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      temperature: 0.78,
      max_tokens: 900,
      stream: true,
    }),
  })

  if (!groqRes.ok) {
    const error = await groqRes.text()
    console.error('Groq error:', groqRes.status, error)
    return Response.json({ error }, { status: 500 })
  }

  const encoder = new TextEncoder()
  const decoder = new TextDecoder()

  const stream = new ReadableStream({
    async start(controller) {
      const reader = groqRes.body!.getReader()
      let buffer = ''

      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split('\n')
          buffer = lines.pop() ?? ''

          for (const line of lines) {
            if (!line.startsWith('data: ')) continue
            const data = line.slice(6).trim()
            if (data === '[DONE]') {
              controller.enqueue(encoder.encode('e:{"finishReason":"stop","usage":{"promptTokens":0,"completionTokens":0},"isContinued":false}\n'))
              continue
            }
            try {
              const json = JSON.parse(data)
              const text = json.choices?.[0]?.delta?.content
              if (text) {
                controller.enqueue(encoder.encode(`0:${JSON.stringify(text)}\n`))
              }
            } catch {
              // skip malformed chunks
            }
          }
        }
      } catch (err) {
        console.error('Stream read error:', err)
      } finally {
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Vercel-AI-Data-Stream': 'v1',
      'Cache-Control': 'no-cache',
    },
  })
}
