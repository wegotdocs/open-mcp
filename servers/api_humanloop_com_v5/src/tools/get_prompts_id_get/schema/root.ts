import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Prompt."),
  "version_id": z.string().describe("A specific Version ID of the Prompt to retrieve.").optional(),
  "environment": z.string().describe("Name of the Environment to retrieve a deployed Version from.").optional()
}