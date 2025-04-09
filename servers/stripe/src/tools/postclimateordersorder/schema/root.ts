import { z } from "zod"

export const inputParams = {
  "order": z.string().max(5000).describe("Unique identifier of the order.")
}