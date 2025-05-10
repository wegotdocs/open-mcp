import { z } from "zod"

export const inputParams = {
  "delivery_content_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `delivery_content_info` to the tool, first call the tool `expandSchema` with \"/properties/delivery_play_config/properties/delivery_full_send_config/properties/delivery_content_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "delivery_floor_amount": z.string().describe("满足消费金额门槛，左闭区间，单位元。\t说明：限制支付时的订单金额最少满足的金额门槛。\t限制：value > 0 && value <= 99999。").optional()
}