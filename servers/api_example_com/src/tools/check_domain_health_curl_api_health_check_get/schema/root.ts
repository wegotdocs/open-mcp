import { z } from "zod"

export const inputParamsSchema = {
  "url": z.string().describe("The URL to check")
}