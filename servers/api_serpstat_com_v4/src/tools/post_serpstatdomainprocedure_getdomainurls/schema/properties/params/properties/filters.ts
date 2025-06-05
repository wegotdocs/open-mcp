import { z } from "zod"

export const inputParamsSchema = {
  "url_prefix": z.string().describe("Filters results to URLs that start with the given prefix.").optional(),
  "url_contain": z.string().describe("Filters results to URLs that contain the specified substring.").optional(),
  "url_not_contain": z.string().describe("Excludes results with URLs that contain the specified substring.").optional()
}