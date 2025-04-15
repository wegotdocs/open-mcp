import { z } from "zod"

export const inputParamsSchema = {
  "entity_watchlist_screening_id": z.string().describe("ID of the associated entity screening."),
  "search_terms": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `search_terms` to the tool, first call the tool `expandSchema` with \"/properties/search_terms\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Search terms for editing an entity watchlist screening</property-description>").optional(),
  "assignee": z.string().describe("ID of the associated user. To retrieve the email address or other details of the person corresponding to this id, use `/dashboard_user/get`.").optional(),
  "status": z.enum(["rejected","pending_review","cleared"]).describe("A status enum indicating whether a screening is still pending review, has been rejected, or has been cleared.").optional(),
  "client_user_id": z.string().describe("A unique ID that identifies the end user in your system. This ID can also be used to associate user-specific data from other Plaid products. Financial Account Matching requires this field and the `/link/token/create` `client_user_id` to be consistent. Personally identifiable information, such as an email address or phone number, should not be used in the `client_user_id`.").optional(),
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "reset_fields": z.array(z.literal("assignee").describe("The name of a field that can be reset back to null")).nullable().describe("A list of fields to reset back to null").optional()
}