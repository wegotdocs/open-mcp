import { z } from "zod"

export const inputParamsSchema = {
  "cursor": z.string().describe("A token used to return the next page of a previous request. Use the cursor provided in the previous response.").optional(),
  "office_id": z.number().int().describe("filter departments by office.").optional(),
  "name_search": z.string().describe("search departments by name or search by the substring of the name. If input example is 'Happy', output example can be a list of departments whose name contains the string Happy - ['Happy department 1', 'Happy department 2']").optional()
}