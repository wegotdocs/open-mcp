import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string().describe("Key to clear the cache")
}