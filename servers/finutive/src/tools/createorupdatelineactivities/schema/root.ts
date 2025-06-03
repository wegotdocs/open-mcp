import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "b_business_id": z.string().optional(),
  "line_activities": z.array(z.object({ "id": z.string().optional(), "code": z.string().optional(), "name": z.string().optional(), "discount": z.number().optional() })).optional()
}