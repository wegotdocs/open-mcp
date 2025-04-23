import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Dataset."),
  "include_datapoints": z.enum(["latest_committed","latest_saved"]).describe("If set to 'latest_saved', include datapoints for the latest saved version. Alternatively, 'latest_committed' (deprecated) includes datapoints for the latest committed version only.").optional()
}