import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "package_id": z.string().optional(),
  "importance": z.enum(["low","mid","high"]).optional(),
  "track_companies": z.boolean().describe("Whether companies identified for the tracking pixel should be considered for your MTC.\n").optional(),
  "short_description": z.string().optional(),
  "long_description": z.string().optional()
}