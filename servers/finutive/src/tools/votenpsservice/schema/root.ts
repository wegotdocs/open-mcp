import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "services": z.array(z.object({ "id": z.string().optional(), "comment": z.string().optional(), "vote": z.number().int().optional() })).optional()
}