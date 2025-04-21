import { z } from "zod"

export const inputParamsSchema = {
  "dryRun": z.string().optional(),
  "target": z.string(),
  "type": z.string()
}