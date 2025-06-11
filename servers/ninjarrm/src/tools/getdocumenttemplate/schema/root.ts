import { z } from "zod"

export const inputParamsSchema = {
  "documentTemplateId": z.number().int(),
  "includeTechnicianRoles": z.boolean().describe("Includes allowed technician roles.").optional()
}