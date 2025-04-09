import { z } from "zod"

export const inputParams = {
  "planId": z.number().int().describe("The ID of the plan."),
  "cursor": z.string().describe("The cursor to start from. If not provided, the first page will be returned.").optional(),
  "maxResults": z.number().int().describe("The maximum number of plan teams to return per page. The maximum value is 50. The default value is 50.").optional()
}