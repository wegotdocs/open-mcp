import { z } from "zod"

export const inputParamsSchema = {
  "args": z.string().max(255).describe("Arguments help text, shown in commands auto-completion").optional(),
  "description": z.string().max(255).describe("Description, shown in commands auto-completion"),
  "name": z.string().min(1).max(255).describe("Unique command name"),
  "set": z.string().max(255).describe("Set name used for grouping commands").optional()
}