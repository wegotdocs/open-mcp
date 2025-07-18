import { z } from "zod"

export const inputParamsSchema = {
  "webId": z.string().uuid().describe("Guid"),
  "name": z.string().nullable().describe("Name of Web").optional(),
  "description": z.string().nullable().describe("Description of Web").optional(),
  "url": z.string().nullable().describe("Url of Web").optional(),
  "active": z.boolean().describe("Active or inactive Web Status").optional(),
  "scrapingStrategyId": z.number().int().nullable().describe("Scraping Strategy Id").optional()
}