import { z } from "zod"

export const inputParamsSchema = {
  "cursor": z.string().describe("A token used to return the next page of a previous request. Use the cursor provided in the previous response.").optional(),
  "office_id": z.number().int().describe("search call center by office.").optional(),
  "name_search": z.string().describe("search call centers by name or search by the substring of the name. If input example is 'Cool', output example can be a list of call centers whose name contains the string\n'Cool' - ['Cool call center 1', 'Cool call center 2049']").optional()
}