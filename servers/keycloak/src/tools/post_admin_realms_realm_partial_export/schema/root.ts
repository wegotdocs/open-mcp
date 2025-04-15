import { z } from "zod"

export const inputParamsSchema = {
  "exportClients": z.boolean().optional(),
  "exportGroupsAndRoles": z.boolean().optional()
}