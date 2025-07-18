import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().nullable().describe("Id of Web").optional(),
  "url": z.string().nullable().describe("Url of Web").optional(),
  "name": z.string().nullable().describe("Name of Web").optional(),
  "description": z.string().nullable().describe("Description of Web").optional(),
  "scrapingStrategyId": z.number().int().nullable().describe("WebScrapingStrategy to extract content of web").optional()
}