import { z } from "zod"

export const inputParamsSchema = {
  "enable_push": z.boolean().describe("Whether to send push notification for this event").optional(),
  "event_type": z.enum(["message.new","message.updated","reaction.new"]).describe("Event type (message.new, message.updated, reaction.new)"),
  "push_provider_name": z.string().describe("Push provider name").optional(),
  "push_provider_type": z.enum(["firebase","apn"]).describe("Push provider type (firebase, apn)"),
  "template": z.string().describe("Push template").optional()
}