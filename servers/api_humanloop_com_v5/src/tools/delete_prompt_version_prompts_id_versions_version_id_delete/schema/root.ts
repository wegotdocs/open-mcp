import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Prompt."),
  "version_id": z.string().describe("Unique identifier for the specific version of the Prompt.")
}