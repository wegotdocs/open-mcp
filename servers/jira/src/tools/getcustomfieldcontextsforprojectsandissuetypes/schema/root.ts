import { z } from "zod"

export const inputParamsSchema = {
  "fieldId": z.string().describe("The ID of the custom field."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "mappings": z.array(z.object({ "issueTypeId": z.string().describe("The ID of the issue type."), "projectId": z.string().describe("The ID of the project.") }).strict().describe("The project and issue type mapping.")).describe("The project and issue type mappings.")
}