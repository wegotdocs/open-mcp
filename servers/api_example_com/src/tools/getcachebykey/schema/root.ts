import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string().describe("Key to search")
}