import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "originator_client_id": z.string().describe("Client ID of the the originator whose diligence that you want to submit."),
  "originator_diligence": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `originator_diligence` to the tool, first call the tool `expandSchema` with \"/properties/originator_diligence\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The diligence information for the originator.</property-description>")
}