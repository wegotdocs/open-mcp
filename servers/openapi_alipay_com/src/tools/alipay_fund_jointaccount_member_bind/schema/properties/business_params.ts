import { z } from "zod"

export const inputParams = {
  "employee_id": z.string().describe("企业员工工卡").optional(),
  "fund_ext_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `fund_ext_info` to the tool, first call the tool `expandSchema` with \"/properties/business_params/properties/fund_ext_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "group_id_list": z.array(z.string()).describe("员工关联的群组ID，当前系统仅支持一个").optional()
}