import { z } from "zod"

export const inputParamsSchema = {
  "templateName": z.string().optional(),
  "includeTechnicianRoles": z.boolean().describe("Includes allowed technician roles.").optional()
}