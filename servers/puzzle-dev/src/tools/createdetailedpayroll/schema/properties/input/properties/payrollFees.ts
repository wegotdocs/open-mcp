import { z } from "zod"

export const inputParams = {
  "amount": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `amount` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/payrollFees/properties/amount\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "currency": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `currency` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/payrollFees/properties/currency\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>")
}