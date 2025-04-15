import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the issue resolution."),
  "description": z.string().max(255).describe("The description of the resolution.").optional(),
  "name": z.string().max(60).describe("The name of the resolution. Must be unique.")
}