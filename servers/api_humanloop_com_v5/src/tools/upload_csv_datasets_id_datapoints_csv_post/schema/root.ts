import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for the Dataset"),
  "version_id": z.string().describe("ID of the specific Dataset version to base the created Version on.").optional(),
  "environment": z.string().describe("Name of the Environment identifying a deployed Version to base the created Version on.").optional()
}