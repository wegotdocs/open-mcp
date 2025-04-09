import { z } from "zod"

export const inputParams = {
  "issueTypeSchemeId": z.number().int().describe("The ID of the issue type scheme."),
  "defaultIssueTypeId": z.string().describe("The ID of the default issue type of the issue type scheme.").optional(),
  "description": z.string().describe("The description of the issue type scheme. The maximum length is 4000 characters.").optional(),
  "name": z.string().describe("The name of the issue type scheme. The name must be unique. The maximum length is 255 characters.").optional()
}