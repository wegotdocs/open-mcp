import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name of the environment to create"),
  "parameters": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `parameters` to the tool, first call the tool `expandSchema` with \"/properties/parameters\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Parameters for environment creation</property-description>").optional(),
  "commit_to_git": z.boolean().describe("Whether to commit changes to git").optional(),
  "env_type": z.string().describe("Type of environment to create (regular or customer)").optional(),
  "template_prefixes": z.array(z.string()).describe("List of template prefixes to use").optional()
}