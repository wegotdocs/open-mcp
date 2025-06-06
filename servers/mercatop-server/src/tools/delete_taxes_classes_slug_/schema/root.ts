import { z } from "zod"

export const inputParamsSchema = {
  "slug": z.string().describe("Unique slug for the resource."),
  "force": z.boolean().describe("Required to be true, as resource does not support trashing.").optional()
}