import { z } from "zod"

export const inputParamsSchema = {
  "birthday": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `birthday` to the tool, first call the tool `expandSchema` with \"/properties/contact/properties/birthday\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "contact_custom_fields": z.array(z.object({ "custom_field_id": z.string().optional(), "value": z.string().optional() })).optional(),
  "deal_ids": z.array(z.string()).optional(),
  "emails": z.array(z.object({ "email": z.string().optional() })).optional(),
  "facebook": z.string().optional(),
  "legal_bases": z.array(z.object({ "category": z.string().optional(), "status": z.string().optional(), "type": z.string().optional() })).optional(),
  "linkedin": z.string().optional(),
  "name": z.string().optional(),
  "organization_id": z.string().optional(),
  "phones": z.array(z.object({ "phone": z.string().optional(), "type": z.string().optional() })).optional(),
  "skype": z.string().optional(),
  "title": z.string().optional()
}