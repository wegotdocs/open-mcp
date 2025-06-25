import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Location name"),
  "address_name": z.string().describe("Address name"),
  "email_address": z.string().describe("Email address"),
  "phone_number": z.union([z.string().describe("Phone number"), z.null().describe("Phone number")]).describe("Phone number").optional(),
  "archived": z.boolean().describe("Indicates if the location is archived").optional(),
  "external_app": z.boolean().describe("Indicates a location managed by an external integration. Only to be used for requests made with Oauth 2.0 access tokens. External app locations do not need to provide an address.").optional(),
  "address": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `address` to the tool, first call the tool `expandSchema` with \"/properties/fulfillments_location/properties/address\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}