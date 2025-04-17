import { z } from "zod"

export const inputParamsSchema = {
  "includePointClasses": z.boolean().describe("When true, the returned Equipment Classes will include a list of their child Point Classes").optional()
}