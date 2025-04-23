import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Flow."),
  "path": z.string().describe("Path of the Flow including the Flow name, which is used as a unique identifier.").optional(),
  "name": z.string().describe("Name of the Flow.").optional(),
  "directory_id": z.string().describe("Unique identifier for the Directory to move Flow to. Starts with `dir_`.").optional()
}