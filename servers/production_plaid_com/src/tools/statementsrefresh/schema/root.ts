import { z } from "zod"

export const inputParamsSchema = {
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "start_date": z.string().date().describe("The start date for statements, in \"YYYY-MM-DD\" format, e.g. \"2023-08-30\". To determine whether a statement falls within the specified date range, Plaid will use the statement posted date. The statement posted date is typically either the last day of the statement period, or the following day."),
  "end_date": z.string().date().describe("The end date for statements, in \"YYYY-MM-DD\" format, e.g. \"2023-10-30\". You can request up to two years of data. To determine whether a statement falls within the specified date range, Plaid will use the statement posted date. The statement posted date is typically either the last day of the statement period, or the following day.")
}