import { z } from "zod"

export const inputParamsSchema = {
  "service_id": z.string().describe("Service identifier"),
  "manager_id": z.string().describe("Manager identifier"),
  "max_clients": z.number().int().optional(),
  "is_responsible": z.boolean().optional(),
  "responsible_id": z.string().optional()
}