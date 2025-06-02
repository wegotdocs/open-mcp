import { z } from "zod"

export const inputParamsSchema = {
  "order": z.string().describe("Field to order by").optional(),
  "per_page": z.number().describe("Records per page").optional(),
  "page": z.number().describe("Page number").optional(),
  "fields": z.string().describe("CSV of fields to return (all, \"blank\" or see list of all field names below)").optional(),
  "q": z.string().describe("Search query").optional(),
  "reviewValue": z.string().describe("Filter by the VASP's review status. Possible values include: \"TRUSTED\", \"BLOCKED\", \"MANUAL\", or \"NULL\". When provided, only VASPs that match the specified reviewValue will be returned (i.e., VASPs that have already been reviewed to this status).").optional()
}