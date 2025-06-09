import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "organizationId": z.number().int(),
  "id": z.number().int(),
  "name": z.string(),
  "address": z.string(),
  "driver_name": z.union([z.string(), z.null()]).optional(),
  "driver_identification": z.union([z.string(), z.null()]).optional(),
  "car_number": z.union([z.string(), z.null()]).optional()
}