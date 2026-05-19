import { streamText } from 'ai'
import { groq } from '@ai-sdk/groq'
import { SYSTEM_PROMPT } from '@/lib/prompt'

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const result = await streamText({
      model: groq('llama-3.3-70b-versatile'),
      system: SYSTEM_PROMPT,
      messages,
      temperature: 0.78,
      maxTokens: 900,
      onError: ({ error }) => {
        console.error('>>> Groq error:', JSON.stringify(error))
        throw error
      },
    })

    return result.toDataStreamResponse()
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('>>> Route error:', message)
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
