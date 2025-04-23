import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for Tool."),
  "path": z.string().describe("Path of the Tool including the Tool name, which is used as a unique identifier.").optional(),
  "name": z.string().describe("Name of the Tool, which is used as a unique identifier.").optional()
}