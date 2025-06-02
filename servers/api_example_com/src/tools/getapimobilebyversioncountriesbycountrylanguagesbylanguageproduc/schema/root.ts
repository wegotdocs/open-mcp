import { z } from "zod"

export const inputParamsSchema = {
  "version": z.string().optional(),
  "country": z.string().optional(),
  "language": z.string().optional(),
  "productId": z.string().optional(),
  "colorId": z.string().optional()
}