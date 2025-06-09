import { z } from "zod"

export const inputParamsSchema = {
  "locale": z.string(),
  "organizationId": z.number().int(),
  "name": z.string(),
  "address": z.string(),
  "sale_object": z.union([z.boolean(), z.null()]).optional(),
  "purchase_object": z.union([z.boolean(), z.null()]).optional(),
  "active": z.union([z.boolean(), z.null()]).optional(),
  "driver_name": z.union([z.string(), z.null()]).optional(),
  "driver_identification": z.union([z.string(), z.null()]).optional(),
  "car_number": z.union([z.string(), z.null()]).optional()
}