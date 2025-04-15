import { z } from "zod"

export const inputParamsSchema = {
  "idOrName": z.string().describe("The unique project identifier or the project name"),
  "environmentSlugOrId": z.string().describe("The unique custom environment identifier within the project"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "b_slug": z.string().max(32).describe("The slug of the custom environment.").optional(),
  "description": z.string().max(256).describe("Description of the custom environment. This is optional.").optional(),
  "branchMatcher": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `branchMatcher` to the tool, first call the tool `expandSchema` with \"/properties/branchMatcher\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>How we want to determine a matching branch. This is optional.</property-description>").optional()
}