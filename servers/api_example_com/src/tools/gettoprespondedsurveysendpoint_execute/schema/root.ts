import { z } from "zod"

export const inputParamsSchema = {
  "clientId": z.string().describe("Client ID"),
  "groupId": z.number().describe("Group ID").optional(),
  "startDate": z.string().datetime({ offset: true }).describe("Start date").optional(),
  "endDate": z.string().datetime({ offset: true }).describe("End date").optional(),
  "limit": z.number().describe("Limit of records to return").optional()
}