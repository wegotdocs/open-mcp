import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Unique command name"),
  "args": z.string().max(255).describe("Arguments help text, shown in commands auto-completion").optional(),
  "description": z.string().max(255).describe("Description, shown in commands auto-completion"),
  "set": z.string().max(255).describe("Set name used for grouping commands").optional()
}