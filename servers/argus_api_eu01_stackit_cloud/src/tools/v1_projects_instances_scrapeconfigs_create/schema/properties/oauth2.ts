import { z } from "zod"

export const inputParamsSchema = {
  "clientId": z.string().min(1).max(200).describe("clientId"),
  "clientSecret": z.string().min(1).max(200).describe("clientSecret"),
  "scopes": z.array(z.string().min(1).max(200)).describe("The URL to fetch the token from.").optional(),
  "tlsConfig": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `tlsConfig` to the tool, first call the tool `expandSchema` with \"/properties/oauth2/properties/tlsConfig\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Configures the scrape request's TLS settings.</property-description>").optional(),
  "tokenUrl": z.string().min(1).max(200).describe("The URL to fetch the token from.")
}