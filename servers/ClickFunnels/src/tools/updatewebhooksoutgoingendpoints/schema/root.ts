import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "webhooks_outgoing_endpoint": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `webhooks_outgoing_endpoint` to the tool, first call the tool `expandSchema` with \"/properties/webhooks_outgoing_endpoint\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Webhooks</property-description>").optional()
}