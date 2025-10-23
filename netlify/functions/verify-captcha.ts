import type { Handler } from "@netlify/functions"
import fetch from "node-fetch"

export const handler: Handler = async (event) => {
  try {
    const { token } = JSON.parse(event.body || "{}")

    const secretKey = process.env.RECAPTCHA_SECRET_KEY
    if (!secretKey) return { statusCode: 500, body: "Secret key not set" }

    const res = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      { method: "POST" }
    )
    const data = await res.json()

    if (data.success) {
      return { statusCode: 200, body: JSON.stringify({ success: true }) }
    } else {
      return { statusCode: 400, body: JSON.stringify({ success: false, error: data["error-codes"] }) }
    }
  } catch (error) {
    console.error(error)
    return { statusCode: 500, body: JSON.stringify({ success: false, error: "Server error" }) }
  }
}
