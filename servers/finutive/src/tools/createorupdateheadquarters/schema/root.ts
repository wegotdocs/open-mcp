import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "headquarters": z.array(z.object({ "id": z.string().optional(), "category": z.enum(["ACTIVITY","SOCIAL","FISCAL"]).optional(), "zip": z.string().optional(), "province": z.string().optional(), "city": z.string().optional(), "address": z.string().optional() })).optional()
}