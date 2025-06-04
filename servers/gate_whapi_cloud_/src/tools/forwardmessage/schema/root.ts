import { z } from "zod"

export const inputParamsSchema = {
  "MessageID": z.string().regex(new RegExp("^[A-Za-z0-9._]{4,23}-[A-Za-z0-9._]{4,14}(-[A-Za-z0-9._]{4,10})?(-[A-Za-z0-9._]{4,10})?$")).describe("Message ID"),
  "to": z.string().regex(new RegExp("^[\\d-]{10,31}(@[\\w\\.]{1,})?$")).describe("Chat ID or phone number where the message will be forwarded"),
  "force": z.boolean().describe("Force forward message").optional()
}