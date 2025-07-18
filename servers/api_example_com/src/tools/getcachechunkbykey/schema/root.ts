import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string().describe("The key to search for in the cache.")
}