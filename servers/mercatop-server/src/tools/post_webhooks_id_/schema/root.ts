import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Unique identifier for the resource."),
  "name": z.string().describe("A friendly name for the webhook.").optional(),
  "status": z.enum(["active","paused","disabled"]).describe("Webhook status.").optional(),
  "topic": z.string().describe("Webhook topic.").optional(),
  "secret": z.string().describe("Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided.").optional()
}