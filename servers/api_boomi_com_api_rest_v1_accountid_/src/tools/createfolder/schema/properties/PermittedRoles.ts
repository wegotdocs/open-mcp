import { z } from "zod"

export const inputParamsSchema = {
  "RoleReference": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional() })).optional()
}