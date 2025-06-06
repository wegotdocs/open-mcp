import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Unique identifier for the resource."),
  "force": z.boolean().describe("Required to be true, as resource does not support trashing.").optional()
}