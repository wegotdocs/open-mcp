import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "count": z.number().int().gte(1).lte(500).describe("The total number of Institutions to return."),
  "offset": z.number().int().gte(0).describe("The number of Institutions to skip."),
  "country_codes": z.array(z.enum(["US","GB","ES","NL","FR","IE","CA","DE","IT","PL","DK","NO","SE","EE","LT","LV","PT","BE"]).describe("ISO-3166-1 alpha-2 country code standard.")).min(1).describe("Specify which country or countries to include institutions from, using the ISO-3166-1 alpha-2 country code standard.\n\nIn API versions 2019-05-29 and earlier, the `country_codes` parameter is an optional parameter within the `options` object and will default to `[US]` if it is not supplied.\n"),
  "options": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `options` to the tool, first call the tool `expandSchema` with \"/properties/options\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>An optional object to filter `/institutions/get` results.</property-description>").optional()
}