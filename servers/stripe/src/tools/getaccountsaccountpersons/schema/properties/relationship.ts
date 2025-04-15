import { z } from "zod"

export const inputParamsSchema = {
  "authorizer": z.boolean().optional(),
  "director": z.boolean().optional(),
  "executive": z.boolean().optional(),
  "legal_guardian": z.boolean().optional(),
  "owner": z.boolean().optional(),
  "representative": z.boolean().optional()
}