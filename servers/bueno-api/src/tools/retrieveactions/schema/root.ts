import { z } from "zod"

export const inputParamsSchema = {
  "organisationId": z.string().uuid().describe("Unique identifier of an Organisation"),
  "ids": z.array(z.number().int()).describe("Numeric identifier of an Action").optional(),
  "siteIds": z.array(z.string().uuid()).describe("List of unique Site Ids the Actions pertain to").optional(),
  "statusIds": z.array(z.number().int()).describe("List of unique Status Ids the Actions have").optional(),
  "updatedBefore": z.string().datetime({ offset: true }).describe("Latest timestamp at which the Actions were last updated").optional(),
  "updatedAfter": z.string().datetime({ offset: true }).describe("Earliest timestamp at which the Actions were last updated").optional(),
  "createdBefore": z.string().datetime({ offset: true }).describe("Latest timestamp at which the Actions were created").optional(),
  "createdAfter": z.string().datetime({ offset: true }).describe("Earliest timestamp at which the Actions were created").optional(),
  "closedBefore": z.string().datetime({ offset: true }).describe("Latest timestamp at which the Actions were closed").optional(),
  "closedAfter": z.string().datetime({ offset: true }).describe("Earliest timestamp at which the Actions were closed").optional()
}