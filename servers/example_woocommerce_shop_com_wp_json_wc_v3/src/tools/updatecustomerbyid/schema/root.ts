import { z } from "zod"

export const inputParamsSchema = {
  "customerId": z.number().int().describe("ID of customer to update"),
  "id": z.number().int().describe("Unique identifier for the resource. read-only").optional(),
  "date_created": z.string().datetime({ offset: true }).describe("The date the customer was created, in the site's timezone. read-only").optional(),
  "date_created_gmt": z.string().datetime({ offset: true }).describe("The date the customer was created, as GMT. read-only").optional(),
  "date_modified": z.string().datetime({ offset: true }).describe("The date the customer was last modified, in the site's timezone. read-only").optional(),
  "date_modified_gmt": z.string().datetime({ offset: true }).describe("The date the customer was last modified, as GMT. read-only").optional(),
  "email": z.string().describe("The email address for the customer. mandatory").optional(),
  "first_name": z.string().describe("Customer first name.").optional(),
  "last_name": z.string().describe("Customer last name.").optional(),
  "role": z.string().describe("Customer role. read-only").optional(),
  "username": z.string().describe("Customer login name.").optional(),
  "password": z.string().describe("Customer password. write-only").optional(),
  "billing": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `billing` to the tool, first call the tool `expandSchema` with \"/properties/billing\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "shipping": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `shipping` to the tool, first call the tool `expandSchema` with \"/properties/shipping\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "is_paying_customer": z.boolean().describe("Is the customer a paying customer? read-only").optional(),
  "avatar_url": z.string().describe("Avatar URL. read-only").optional(),
  "meta_data": z.array(z.object({ "id": z.number().int().describe("Meta ID.").optional(), "key": z.string().describe("Meta key.").optional(), "value": z.object({}).describe("Meta value.").optional(), "display_key": z.string().describe("Meta key for UI display.").optional(), "display_value": z.object({}).describe("Meta value for UI display.").optional() })).describe("Meta data.").optional()
}