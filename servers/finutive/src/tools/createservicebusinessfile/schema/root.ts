import { z } from "zod"

export const inputParamsSchema = {
  "service_id": z.string().describe("Service ID"),
  "business_id": z.string().describe("Business ID"),
  "id": z.string().optional(),
  "file_id": z.string().optional(),
  "phase": z.string().optional(),
  "responsible": z.string().optional(),
  "comment": z.string().optional(),
  "name_custom_file": z.string().optional(),
  "color_custom_file": z.string().optional()
}