import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the `X-GitHub-Hook-ID` header of a webhook delivery."),
  "config": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `config` to the tool, first call the tool `expandSchema` with \"/properties/config\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Configuration object of the webhook</property-description>").optional(),
  "events": z.array(z.string()).describe("Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. This replaces the entire array of events.").optional(),
  "add_events": z.array(z.string()).describe("Determines a list of events to be added to the list of events that the Hook triggers for.").optional(),
  "remove_events": z.array(z.string()).describe("Determines a list of events to be removed from the list of events that the Hook triggers for.").optional(),
  "active": z.boolean().describe("Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.").optional()
}