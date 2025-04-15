import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(5000).describe("Unique identifier for the object.")
}