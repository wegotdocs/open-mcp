import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "name": z.string().describe("Use `web` to create a webhook. Default: `web`. This parameter only accepts the value `web`.").optional(),
  "config": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `config` to the tool, first call the tool `expandSchema` with \"/properties/config\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Key/value pairs to provide settings for this webhook.</property-description>").optional(),
  "events": z.array(z.string()).describe("Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for.").optional(),
  "active": z.boolean().describe("Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.").optional()
}