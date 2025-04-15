import { z } from "zod"

export const inputParams = {
  "access_type": z.string().describe("搜索直达类型 BASE：基础信息，只支持基础信息工单提报").optional(),
  "appid": z.string().describe("小程序Id").optional(),
  "base_items": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `base_items` to the tool, first call the tool `expandSchema` with \"/properties/biz_data/properties/base_items\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "descprise": z.string().describe("服务描述").optional(),
  "is_draft": z.boolean().describe("是否为草稿态").optional(),
  "order_id": z.string().describe("申请单id，仅仅驳回或修改是传入").optional(),
  "spec_code": z.string().describe("服务的类型 SP_MINI_APP 小程序 SP_PUBLIC_APP 生活号").optional()
}