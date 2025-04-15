import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "options": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `options` to the tool, first call the tool `expandSchema` with \"/properties/options\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>An optional object to be used with the request. If specified, `options` must not be `null`.</property-description>").optional(),
  "processor_token": z.string().describe("The processor token obtained from the Plaid integration partner. Processor tokens are in the format: `processor-<environment>-<identifier>`"),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "start_date": z.string().date().describe("The earliest date for which data should be returned. Dates should be formatted as YYYY-MM-DD."),
  "end_date": z.string().date().describe("The latest date for which data should be returned. Dates should be formatted as YYYY-MM-DD.")
}