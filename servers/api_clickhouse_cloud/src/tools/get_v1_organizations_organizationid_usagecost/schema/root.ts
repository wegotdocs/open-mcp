import { z } from "zod"

export const inputParamsSchema = {
  "organizationId": z.string().uuid().describe("ID of the requested organization."),
  "from_date": z.string().datetime({ offset: true }).describe("Start date for the report, e.g. 2024-12-19."),
  "to_date": z.string().datetime({ offset: true }).describe("End date (inclusive) for the report, e.g. 2024-12-20. This date cannot be more than 30 days after from_date (for a maximum queried period of 31 days).")
}