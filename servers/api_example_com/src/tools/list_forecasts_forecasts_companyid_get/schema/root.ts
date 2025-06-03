import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string(),
  "scenarioId": z.string().optional(),
  "sync": z.boolean().optional(),
  "operations": z.boolean().optional(),
  "startDate": z.string().date().optional(),
  "endDate": z.string().date().optional(),
  "limit": z.number().int().lte(2000).describe("Param to limit the size of the list of objects of response. Default 500 and max value 2K").optional(),
  "nextPageToken": z.string().describe("Key to obtain the next N objects of your query based on the limit value. You can obtain nextPageToken from response to iterate over pages.").optional()
}