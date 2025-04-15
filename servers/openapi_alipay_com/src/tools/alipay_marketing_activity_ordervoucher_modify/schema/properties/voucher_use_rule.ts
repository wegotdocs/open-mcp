import { z } from "zod"

export const inputParams = {
  "exchange_voucher": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `exchange_voucher` to the tool, first call the tool `expandSchema` with \"/properties/voucher_use_rule/properties/exchange_voucher\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "voucher_available_scope": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `voucher_available_scope` to the tool, first call the tool `expandSchema` with \"/properties/voucher_use_rule/properties/voucher_available_scope\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "voucher_valid_period": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `voucher_valid_period` to the tool, first call the tool `expandSchema` with \"/properties/voucher_use_rule/properties/voucher_valid_period\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}