import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this cred_ mapping."),
  "is_authn_provider": z.boolean().optional(),
  "url": z.string().url().max(2000).nullable().optional(),
  "cred_id": z.number().int(),
  "product": z.number().int().nullable().optional(),
  "finding": z.number().int().nullable().optional(),
  "engagement": z.number().int().nullable().optional(),
  "test": z.number().int().nullable().optional()
}