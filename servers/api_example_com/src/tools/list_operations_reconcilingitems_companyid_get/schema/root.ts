import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string(),
  "reconcilingSourceCustomId": z.string().describe("Reconciling source custom id").optional(),
  "reconciled": z.boolean().describe("Boolean param to filter reconciled or not reconciled items").optional(),
  "startDate": z.string().date().describe("YYYY-MM-DD format").optional(),
  "endDate": z.string().date().describe("YYYY-MM-DD format").optional(),
  "limit": z.number().int().lte(2000).describe("Param to limit the size of the list of objects of response. Default 500 and max value 2K").optional(),
  "nextPageToken": z.string().describe("Key to obtain the next N objects of your query based on the limit value. You can obtain nextPageToken from response to iterate over pages.").optional()
}