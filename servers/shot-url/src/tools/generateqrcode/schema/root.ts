import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string().describe("short url request").optional()
}