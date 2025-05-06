import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "build_type": z.enum(["legacy","workflow"]).describe("The process in which the Page will be built. Possible values are `\"legacy\"` and `\"workflow\"`.").optional(),
  "source": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `source` to the tool, first call the tool `expandSchema` with \"/properties/source\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The source branch and directory used to publish your Pages site.</property-description>").optional()
}