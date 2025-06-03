import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "action": z.string().optional(),
  "bank_id": z.string().optional(),
  "user_data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user_data` to the tool, first call the tool `expandSchema` with \"/properties/user_data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "account_id": z.string().optional(),
  "start_date": z.string().optional(),
  "multiaccount": z.string().optional(),
  "reload": z.string().optional(),
  "otp_data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `otp_data` to the tool, first call the tool `expandSchema` with \"/properties/otp_data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}