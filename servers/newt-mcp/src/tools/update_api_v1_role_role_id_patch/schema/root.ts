import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string(),
  "description": z.union([z.string(), z.null()]).optional(),
  "name": z.union([z.string(), z.null()]).optional(),
  "users": z.array(z.string().uuid()),
  "scopes": z.array(z.string())
}