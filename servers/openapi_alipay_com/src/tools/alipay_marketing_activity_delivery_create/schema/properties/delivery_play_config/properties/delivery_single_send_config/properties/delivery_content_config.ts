import { z } from "zod"

export const inputParams = {
  "delivery_send_guide": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `delivery_send_guide` to the tool, first call the tool `expandSchema` with \"/properties/delivery_play_config/properties/delivery_single_send_config/properties/delivery_content_config/properties/delivery_send_guide\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}