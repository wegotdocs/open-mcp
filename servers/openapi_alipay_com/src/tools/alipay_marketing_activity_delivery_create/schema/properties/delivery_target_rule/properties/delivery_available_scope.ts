import { z } from "zod"

export const inputParams = {
  "delivery_available_city_code": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `delivery_available_city_code` to the tool, first call the tool `expandSchema` with \"/properties/delivery_target_rule/properties/delivery_available_scope/properties/delivery_available_city_code\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "delivery_available_scope_type": z.string().describe("投放可用范围类型，目前支持的类型是城市范围CITY_CODE").optional()
}