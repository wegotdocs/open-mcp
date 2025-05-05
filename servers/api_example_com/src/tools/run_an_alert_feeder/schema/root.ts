import { z } from "zod"

export const inputParamsSchema = {
  "alertFeederName": z.string(),
  "dryRun": z.boolean().optional()
}