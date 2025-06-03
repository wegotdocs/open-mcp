import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string(),
  "reconciled": z.boolean().optional(),
  "accountingCode": z.string().optional(),
  "startDate": z.string().date().optional(),
  "endDate": z.string().date().optional(),
  "startUpdatedAt": z.string().datetime({ offset: true }).optional(),
  "endUpdatedAt": z.string().datetime({ offset: true }).optional(),
  "limit": z.number().int().lte(2000).describe("Param to limit the size of the list of objects of response. Default 500 and max value 2K").optional(),
  "nextPageToken": z.string().describe("Key to obtain the next N objects of your query based on the limit value. You can obtain nextPageToken from response to iterate over pages.").optional()
}