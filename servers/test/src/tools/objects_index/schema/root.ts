import { z } from "zod"

export const inputParamsSchema = {
  "locale": z.string(),
  "organizationId": z.number().int(),
  "organization_id": z.number().optional(),
  "id": z.number().optional(),
  "name": z.string().optional(),
  "driver_name": z.string().optional(),
  "driver_identification": z.string().optional(),
  "car_number": z.string().optional(),
  "active": z.number().optional(),
  "driver": z.boolean().optional(),
  "page_size": z.boolean().optional(),
  "page": z.boolean().optional()
}