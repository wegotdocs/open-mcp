import { z } from "zod"

export const inputParams = {
  "projectIdOrKey": z.string().describe("The ID or key of the project."),
  "issueTypeId": z.string().describe("The issuetype ID."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().lte(200).describe("The maximum number of items to return per page.").optional()
}