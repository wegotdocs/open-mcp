import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "minimumAge": z.number().int().optional(),
  "maximumSize": z.number().int().optional(),
  "retention": z.number().int().optional(),
  "rssSyncInterval": z.number().int().optional(),
  "preferIndexerFlags": z.boolean().optional(),
  "availabilityDelay": z.number().int().optional(),
  "allowHardcodedSubs": z.boolean().optional(),
  "whitelistedHardcodedSubs": z.string().nullable().optional()
}