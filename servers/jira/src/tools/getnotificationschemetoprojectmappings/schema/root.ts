import { z } from "zod"

export const inputParams = {
  "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
  "notificationSchemeId": z.array(z.string()).describe("The list of notifications scheme IDs to be filtered out").optional(),
  "projectId": z.array(z.string()).describe("The list of project IDs to be filtered out").optional()
}