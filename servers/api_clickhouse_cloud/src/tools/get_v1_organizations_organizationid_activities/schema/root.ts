import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the requested organization."),
  "from_date": z.string().datetime({ offset: true }).describe("A starting date for a search").optional(),
  "to_date": z.string().datetime({ offset: true }).describe("An ending date for a search").optional()
}