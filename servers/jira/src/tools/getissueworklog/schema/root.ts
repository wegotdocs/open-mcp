import { z } from "zod"

export const inputParams = {
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "startedAfter": z.number().int().describe("The worklog start date and time, as a UNIX timestamp in milliseconds, after which worklogs are returned.").optional(),
  "startedBefore": z.number().int().describe("The worklog start date and time, as a UNIX timestamp in milliseconds, before which worklogs are returned.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts`properties`, which returns worklog properties.").optional()
}