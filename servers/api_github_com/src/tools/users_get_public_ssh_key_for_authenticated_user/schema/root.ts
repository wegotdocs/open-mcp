import { z } from "zod"

export const inputParamsSchema = {
  "key_id": z.number().int().describe("The unique identifier of the key.")
}