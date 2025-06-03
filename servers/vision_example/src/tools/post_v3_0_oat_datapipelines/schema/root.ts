import { z } from "zod"

export const inputParamsSchema = {
  "riskLevels": z.array(z.enum(["info","low","medium","high","critical"])).describe("The list of severity levels to include in the results.\n\nRequests must include at least one severity level.\n"),
  "hasDetail": z.boolean().describe("Parameter that allows you to retrieve detailed logs from the Observed Attack Techniques data pipeline."),
  "description": z.string().max(4000).describe("(Optional) Notes or comments about the pipeline").optional()
}