import { z } from "zod"

export const inputParamsSchema = {
  "days_requested": z.number().int().gte(1).lte(730).describe("The maximum integer number of days of history to include in the Base Report."),
  "client_report_id": z.string().nullable().describe("Client-generated identifier, which can be used by lenders to track loan applications.").optional()
}