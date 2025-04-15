import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(5000).describe("Unique identifier for the object."),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}