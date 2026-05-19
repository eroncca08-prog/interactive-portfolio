import { streamText } from 'ai'
import { createOpenAI } from '@ai-sdk/openai'
import { SYSTEM_PROMPT } from '@/lib/prompt'

export const maxDuration = 30

export async function POST(req: Request) {
  const apiKey = process.env.GROQ_API_KEY ?? ''

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'GROQ_API_KEY not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const groq = createOpenAI({
    baseURL: 'https://api.groq.com/openai/v1',
    apiKey,
  })

  try {
    const { messages } = await req.json()

    const result = await streamText({
      model: groq('llama-3.3-70b-versatile'),
      system: SYSTEM_PROMPT,
      messages,
      temperature: 0.78,
      maxTokens: 900,
    })

    return result.toDataStreamResponse({
      getErrorMessage: (err) => {
        console.error('>>> Stream error:', err)
        return err instanceof Error ? err.message : String(err)
      },
    })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('>>> Route error:', message)
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
