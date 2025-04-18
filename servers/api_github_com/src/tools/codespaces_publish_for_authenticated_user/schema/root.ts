import { z } from "zod"

export const inputParamsSchema = {
  "codespace_name": z.string().describe("The name of the codespace."),
  "name": z.string().describe("A name for the new repository.").optional(),
  "private": z.boolean().describe("Whether the new repository should be private.").optional()
}