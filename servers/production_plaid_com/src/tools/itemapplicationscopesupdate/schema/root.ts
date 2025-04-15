import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "application_id": z.string().describe("This field will map to the application ID that is returned from /item/application/list, or provided to the institution in an oauth redirect."),
  "scopes": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `scopes` to the tool, first call the tool `expandSchema` with \"/properties/scopes\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The scopes object</property-description>"),
  "state": z.string().describe("When scopes are updated during enrollment, this field must be populated with the state sent to the partner in the OAuth Login URI. This field is required when the context is `ENROLLMENT`.").optional(),
  "context": z.enum(["ENROLLMENT","PORTAL"]).describe("An indicator for when scopes are being updated. When scopes are updated via enrollment (i.e. OAuth), the partner must send `ENROLLMENT`. When scopes are updated in a post-enrollment view, the partner must send `PORTAL`.")
}