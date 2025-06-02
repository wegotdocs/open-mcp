import { z } from "zod"

export const inputParamsSchema = {
  "version": z.string(),
  "country": z.string(),
  "language": z.string(),
  "quantity": z.number(),
  "sizeId": z.string().optional(),
  "variantId": z.string()
}