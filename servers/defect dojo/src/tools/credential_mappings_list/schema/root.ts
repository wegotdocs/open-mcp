import { z } from "zod"

export const inputParamsSchema = {
  "cred_id": z.number().int().optional(),
  "engagement": z.number().int().optional(),
  "finding": z.number().int().optional(),
  "is_authn_provider": z.boolean().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "product": z.number().int().optional(),
  "test": z.number().int().optional(),
  "url": z.string().optional()
}