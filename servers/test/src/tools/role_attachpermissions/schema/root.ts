import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "role_id": z.number().int(),
  "permissions": z.array(z.string())
}