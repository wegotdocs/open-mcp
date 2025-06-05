import { z } from "zod"

export const inputParamsSchema = {
  "url_prefix": z.string().describe("Filters results by URLs that start with the given prefix.").optional(),
  "url_contain": z.string().describe("Filters results by URLs that contain the given substring.").optional(),
  "url_not_contain": z.string().describe("Filters results by URLs that do not contain the given substring.").optional(),
  "url": z.string().describe("Filters results to show only exact matching URLs.").optional(),
  "minus_url": z.string().describe("Excludes results that match the given URL.").optional(),
  "pm_url": z.string().describe("Filters results by URLs that partially match the given pattern.").optional()
}