import { z } from "zod"

export const inputParamsSchema = {
  "header": z.array(z.object({ "headerFieldName": z.string().optional(), "targetPropertyName": z.string().optional() })).optional()
}