import { z } from "zod"

export const inputParamsSchema = {
  "imageUrl": z.string().optional(),
  "unit": z.string().optional(),
  "skuFirstCategory": z.string().optional(),
  "skuSecondCategory": z.string().optional(),
  "skuThirdCategory": z.string().optional(),
  "skuAttributeCategory": z.string().optional(),
  "skuAttributeSubCategory": z.string().optional()
}