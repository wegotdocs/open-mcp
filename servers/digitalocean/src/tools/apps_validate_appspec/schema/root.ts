import { z } from "zod"

export const inputParams = {
  "spec": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `spec` to the tool, first call the tool `expandSchema` with \"/properties/spec\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The desired configuration of an application.</property-description>"),
  "app_id": z.string().describe("An optional ID of an existing app. If set, the spec will be treated as a proposed update to the specified app. The existing app is not modified using this method.").optional()
}