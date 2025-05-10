import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the `X-GitHub-Hook-ID` header of a webhook delivery."),
  "config": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `config` to the tool, first call the tool `expandSchema` with \"/properties/config\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Key/value pairs to provide settings for this webhook.</property-description>").optional(),
  "events": z.array(z.string()).describe("Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for.").optional(),
  "active": z.boolean().describe("Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.").optional(),
  "name": z.string().optional()
}