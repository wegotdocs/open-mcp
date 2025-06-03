import { z } from "zod"

export const inputParamsSchema = {
  "service_id": z.string().describe("Service ID"),
  "business_id": z.string().describe("Business ID"),
  "files": z.array(z.object({ "id": z.string().optional(), "phase_id": z.string().optional(), "comment": z.string().optional(), "responsible_id": z.string().optional(), "file_type": z.string().optional(), "file_color": z.string().optional(), "file_name": z.string().optional() })).optional()
}