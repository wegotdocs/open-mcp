import { z } from "zod"

export const inputParamsSchema = {
  "all": z.boolean().describe("If `true`, show notifications marked as read.").optional(),
  "participating": z.boolean().describe("If `true`, only shows notifications in which the user is directly participating or mentioned.").optional(),
  "since": z.string().datetime({ offset: true }).describe("Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional(),
  "before": z.string().datetime({ offset: true }).describe("Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional(),
  "page": z.number().int().describe("The page number of the results to fetch. For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional(),
  "per_page": z.number().int().describe("The number of results per page (max 50). For more information, see \"[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api).\"").optional()
}