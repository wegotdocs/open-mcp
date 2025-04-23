import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Prompt."),
  "path": z.string().describe("Path of the Prompt including the Prompt name, which is used as a unique identifier.").optional(),
  "name": z.string().describe("Name of the Prompt.").optional()
}