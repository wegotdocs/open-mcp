import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the app"),
  "spec": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `spec` to the tool, first call the tool `expandSchema` with \"/properties/spec\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The desired configuration of an application.</property-description>"),
  "update_all_source_versions": z.boolean().describe("Whether or not to update the source versions (for example fetching a new commit or image digest) of all components. By default (when this is false) only newly added sources will be updated to avoid changes like updating the scale of a component from also updating the respective code.").optional()
}