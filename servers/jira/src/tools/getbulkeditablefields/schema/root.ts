import { z } from "zod"

export const inputParamsSchema = {
  "issueIdsOrKeys": z.string().describe("The IDs or keys of the issues to get editable fields from."),
  "searchText": z.string().describe("(Optional)The text to search for in the editable fields.").optional(),
  "endingBefore": z.string().describe("(Optional)The end cursor for use in pagination.").optional(),
  "startingAfter": z.string().describe("(Optional)The start cursor for use in pagination.").optional()
}