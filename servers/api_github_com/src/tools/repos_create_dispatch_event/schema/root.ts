import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "event_type": z.string().min(1).max(100).describe("A custom webhook event name. Must be 100 characters or fewer."),
  "client_payload": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `client_payload` to the tool, first call the tool `expandSchema` with \"/properties/client_payload\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>JSON payload with extra information about the webhook event that your action or workflow may use. The maximum number of top-level properties is 10. The total size of the JSON payload must be less than 64KB.</property-description>").optional()
}