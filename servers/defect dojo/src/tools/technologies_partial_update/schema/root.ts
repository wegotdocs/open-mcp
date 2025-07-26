import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this app_ analysis."),
  "tags": z.array(z.string().min(1)).optional(),
  "name": z.string().min(1).max(200).optional(),
  "confidence": z.number().int().gte(-2147483648).lte(2147483647).nullable().optional(),
  "version": z.string().max(200).nullable().optional(),
  "icon": z.string().max(200).nullable().optional(),
  "website": z.string().url().max(400).nullable().optional(),
  "website_found": z.string().url().max(400).nullable().optional(),
  "product": z.number().int().optional(),
  "user": z.number().int().optional()
}