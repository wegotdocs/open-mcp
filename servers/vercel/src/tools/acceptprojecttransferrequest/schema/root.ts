import { z } from "zod"

export const inputParams = {
  "code": z.string().describe("The code of the project transfer request."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "newProjectName": z.string().max(100).describe("The desired name for the project").optional(),
  "paidFeatures": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `paidFeatures` to the tool, first call the tool `expandSchema` with \"/properties/paidFeatures\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}