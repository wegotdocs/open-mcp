import { z } from "zod"

export const inputParamsSchema = {
  "ChatID": z.string().regex(new RegExp("^[\\d-]{10,31}@[\\w\\.]{1,}$")).describe("Chat ID"),
  "pin": z.boolean().describe("Pin or unpin chat").optional(),
  "mute_until": z.number().int().describe("Time until which the chat should remain muted, in UNIX timestamp format (in milliseconds). Use 0 to unmute the chat").optional(),
  "mark_unread": z.boolean().describe("Mark as unread/read chat").optional(),
  "ephemeral": z.enum(["none","day","week","quarter"]).describe("Amount of days to store messages, when set to none will store infinitely").optional()
}