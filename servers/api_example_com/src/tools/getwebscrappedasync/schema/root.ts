import { z } from "zod"

export const inputParamsSchema = {
  "url": z.string().nullable().describe("Url to scrape").optional(),
  "strategy": z.string().nullable().describe("Scraping strategy").optional()
}