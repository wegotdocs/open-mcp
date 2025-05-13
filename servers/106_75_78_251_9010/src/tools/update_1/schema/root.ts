import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "roleIds": z.array(z.number().int()),
  "name": z.string().min(0).max(128),
  "account": z.string().min(0).max(128),
  "status": z.number().int(),
  "phone": z.string().optional(),
  "email": z.string().optional()
}