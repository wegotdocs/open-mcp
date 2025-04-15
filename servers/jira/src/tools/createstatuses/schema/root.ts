import { z } from "zod"

export const inputParamsSchema = {
  "scope": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `scope` to the tool, first call the tool `expandSchema` with \"/properties/scope\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The scope of the status.</property-description>"),
  "statuses": z.array(z.object({ "description": z.string().describe("The description of the status.").optional(), "name": z.string().max(255).describe("The name of the status."), "statusCategory": z.enum(["TODO","IN_PROGRESS","DONE"]).describe("The category of the status.") }).strict().describe("Details of the status being created.")).describe("Details of the statuses being created.")
}