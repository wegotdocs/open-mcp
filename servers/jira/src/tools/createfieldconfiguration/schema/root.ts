import { z } from "zod"

export const inputParamsSchema = {
  "description": z.string().max(255).describe("The description of the field configuration.").optional(),
  "name": z.string().max(255).describe("The name of the field configuration. Must be unique.")
}