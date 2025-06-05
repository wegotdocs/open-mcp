import { z } from "zod"

export const inputParamsSchema = {
  "visible": z.number().int().describe("The visibility score").optional(),
  "visible_from": z.number().int().describe("The minimum visibility score to apply the filter.").optional(),
  "visible_to": z.number().int().describe("The maximum visibility score to apply the filter.").optional(),
  "traff": z.number().int().describe("The traffic score").optional(),
  "traff_from": z.number().int().describe("The minimum traffic score to apply the filter.").optional(),
  "traff_to": z.number().int().describe("The maximum traffic score to apply the filter.").optional(),
  "minus_domains": z.array(z.string()).describe("A list of domain names to exclude from the search.").optional(),
  "keywords": z.number().int().describe("The total number of keywords associated with the filter.").optional(),
  "keywords_from": z.number().int().describe("The minimum number of keywords to apply the filter.").optional(),
  "keywords_to": z.number().int().describe("The maximum number of keywords to apply the filter.").optional(),
  "relevance": z.number().int().describe("The relevance score").optional(),
  "relevance_from": z.number().int().describe("The minimum relevance score to apply the filter.").optional(),
  "relevance_to": z.number().int().describe("The maximum relevance score to apply the filter.").optional()
}