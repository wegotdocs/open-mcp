import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "rs_user": z.string(),
  "rs_pass": z.string(),
  "identification": z.string(),
  "name": z.string(),
  "brand_name": z.string(),
  "address": z.string(),
  "telephone": z.string(),
  "email": z.string().email(),
  "start_date": z.string(),
  "vat": z.union([z.number(), z.null()]).optional(),
  "profit": z.union([z.number(), z.null()]).optional(),
  "income": z.union([z.number(), z.null()]).optional(),
  "ignorable": z.union([z.boolean().describe("temporary for frontend"), z.null().describe("temporary for frontend")]).describe("temporary for frontend").optional()
}