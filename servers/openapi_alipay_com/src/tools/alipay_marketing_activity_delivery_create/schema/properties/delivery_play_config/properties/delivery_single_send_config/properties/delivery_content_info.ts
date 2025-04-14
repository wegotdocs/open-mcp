import { z } from "zod"

export const inputParams = {
  "delivery_activity_content": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `delivery_activity_content` to the tool, first call the tool `expandSchema` with \"/properties/delivery_play_config/properties/delivery_single_send_config/properties/delivery_content_info/properties/delivery_activity_content\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "delivery_app_content": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `delivery_app_content` to the tool, first call the tool `expandSchema` with \"/properties/delivery_play_config/properties/delivery_single_send_config/properties/delivery_content_info/properties/delivery_app_content\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "delivery_content_type": z.string().describe("运营内容类型。").optional(),
  "delivery_display_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `delivery_display_info` to the tool, first call the tool `expandSchema` with \"/properties/delivery_play_config/properties/delivery_single_send_config/properties/delivery_content_info/properties/delivery_display_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "delivery_item_content": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `delivery_item_content` to the tool, first call the tool `expandSchema` with \"/properties/delivery_play_config/properties/delivery_single_send_config/properties/delivery_content_info/properties/delivery_item_content\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}