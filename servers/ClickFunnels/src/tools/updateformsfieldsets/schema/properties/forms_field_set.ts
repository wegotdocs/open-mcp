import { z } from "zod"

export const inputParamsSchema = {
  "title": z.string().describe("Title").optional()
}