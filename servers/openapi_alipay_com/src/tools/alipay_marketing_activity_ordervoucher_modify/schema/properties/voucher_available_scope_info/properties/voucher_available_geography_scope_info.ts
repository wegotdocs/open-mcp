import { z } from "zod"

export const inputParams = {
  "available_geography_city_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `available_geography_city_info` to the tool, first call the tool `expandSchema` with \"/properties/voucher_available_scope_info/properties/voucher_available_geography_scope_info/properties/available_geography_city_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "available_geography_scope_type": z.string().describe("券可用地理位置类型。").optional(),
  "available_geography_shop_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `available_geography_shop_info` to the tool, first call the tool `expandSchema` with \"/properties/voucher_available_scope_info/properties/voucher_available_geography_scope_info/properties/available_geography_shop_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}