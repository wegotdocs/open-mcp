import { z } from "zod"

export const inputParams = {
  "exportClients": z.boolean().optional(),
  "exportGroupsAndRoles": z.boolean().optional()
}