import { z } from "zod"

export const inputParamsSchema = {
  "propertyId": z.number().int(),
  "language": z.string(),
  "shortDesc": z.string().min(0).max(255).nullable().optional(),
  "mainDesc": z.string().min(0).max(25000),
  "extraDesc": z.string().min(0).max(25000).nullable().optional(),
  "priceDesc": z.string().min(0).max(25000).nullable().optional()
}