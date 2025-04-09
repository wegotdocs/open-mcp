import { z } from "zod"

export const inputParams = {
  "id": z.string().max(5000).describe("Unique identifier for the object.")
}