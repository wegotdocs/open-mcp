import { z } from "zod"

export const inputParamsSchema = {
  "sortField": z.array(z.object({ "fieldName": z.string().optional(), "sortOrder": z.string().optional() }))
}