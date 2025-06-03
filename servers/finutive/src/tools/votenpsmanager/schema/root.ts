import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "manager_id": z.string().describe("Manager ID"),
  "rating": z.number().int(),
  "comments": z.string().optional()
}