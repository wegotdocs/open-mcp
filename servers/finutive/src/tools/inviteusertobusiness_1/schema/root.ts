import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "firstname": z.string().optional(),
  "lastname": z.string().optional(),
  "email": z.string().optional(),
  "role": z.enum(["USER","USER_ADMIN"]).optional(),
  "tools": z.array(z.string()).optional()
}