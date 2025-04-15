import { z } from "zod"

export const inputParamsSchema = {
  "order": z.string().max(5000).describe("Unique identifier of the order.")
}