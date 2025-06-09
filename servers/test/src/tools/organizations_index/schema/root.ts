import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "service_organizations": z.boolean().optional(),
  "id": z.number().optional(),
  "type": z.number().optional(),
  "name": z.string().optional(),
  "email": z.string().optional(),
  "telephone": z.string().optional(),
  "brand_name": z.number().optional(),
  "identification": z.boolean().optional(),
  "page_size": z.number().optional(),
  "page": z.number().optional()
}