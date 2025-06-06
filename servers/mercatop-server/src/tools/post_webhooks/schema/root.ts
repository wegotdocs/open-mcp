import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("A friendly name for the webhook.").optional(),
  "status": z.enum(["active","paused","disabled"]).describe("Webhook status.").optional(),
  "topic": z.string().describe("Webhook topic.").optional(),
  "secret": z.string().describe("Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided.").optional(),
  "delivery_url": z.string().describe("Webhook delivery URL.").optional()
}