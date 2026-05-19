export async function GET() {
  const apiKey = process.env.GROQ_API_KEY ?? ''

  if (!apiKey) {
    return Response.json({ ok: false, error: 'GROQ_API_KEY not set' })
  }

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: 'say ok' }],
        max_tokens: 5,
      }),
    })

    const data = await res.json()
    return Response.json({ ok: res.ok, status: res.status, data })
  } catch (err) {
    return Response.json({ ok: false, error: String(err) })
  }
}
