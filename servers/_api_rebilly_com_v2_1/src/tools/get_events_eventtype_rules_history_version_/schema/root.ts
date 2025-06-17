import { z } from "zod"

export const inputParamsSchema = {
  "fields": z.string().describe("Limit the returned fields to the list specified, separated by comma.  Note that id is always returned.").optional(),
  "expand": z.string().describe("Expand response to get full related object instead of ID.  See the expand guide for more info.").optional()
}