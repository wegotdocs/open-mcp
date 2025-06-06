import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Unique identifier for the resource."),
  "attribute_id": z.number().int().describe("Unique identifier for the attribute of the terms."),
  "force": z.boolean().describe("Required to be true, as resource does not support trashing.").optional()
}