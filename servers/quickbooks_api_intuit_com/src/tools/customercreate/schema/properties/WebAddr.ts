import { z } from "zod"

export const inputParamsSchema = {
  "URI": z.string().describe("Uniform Resource Identifier for the web site.").optional()
}