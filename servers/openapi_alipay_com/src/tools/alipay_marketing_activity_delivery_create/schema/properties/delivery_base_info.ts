import { z } from "zod"

export const inputParams = {
  "delivery_begin_time": z.string().describe("投放计划开始时间。 格式为：yyyy-MM-dd HH:mm:ss。").optional(),
  "delivery_end_time": z.string().describe("投放计划结束时间。 格式为：yyyy-MM-dd HH:mm:ss。").optional(),
  "delivery_material": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `delivery_material` to the tool, first call the tool `expandSchema` with \"/properties/delivery_base_info/properties/delivery_material\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "delivery_name": z.string().describe("投放计划名称。\t投放计划名称不会对用户进行表达，只用于商户管理使用。长度需要大于等于3，小于20。").optional()
}