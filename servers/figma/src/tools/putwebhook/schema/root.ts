import { z } from "zod"

export const inputParamsSchema = {
  "webhook_id": z.string().describe("ID of webhook to update"),
  "event_type": z.enum(["PING","FILE_UPDATE","FILE_VERSION_UPDATE","FILE_DELETE","LIBRARY_PUBLISH","FILE_COMMENT"]).describe("An enum representing the possible events that a webhook can subscribe to"),
  "endpoint": z.string().describe("The HTTP endpoint that will receive a POST request when the event triggers. Max length 2048 characters."),
  "passcode": z.string().describe("String that will be passed back to your webhook endpoint to verify that it is being called by Figma. Max length 100 characters."),
  "status": z.enum(["ACTIVE","PAUSED"]).describe("State of the webhook, including any error state it may be in").optional(),
  "description": z.string().describe("User provided description or name for the webhook. Max length 150 characters.").optional()
}