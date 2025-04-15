import { z } from "zod"

export const inputParams = {
  "event_code": z.string().describe("账单金额变更消息事件码\r\tAR_MTHLY_BILL_CREATE:应收账单创建,\r\tAR_MTHLY_BILL_CHANGE:应收金额更新").optional(),
  "event_type": z.string().describe("账单金额变更消息事件类型\r\tCREATE:创建事件,UPDATE:更新事件").optional(),
  "monthly_bill": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `monthly_bill` to the tool, first call the tool `expandSchema` with \"/properties/monthly_bill\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "msg_id": z.string().describe("事件全局id，可以使用uuid").optional(),
  "out_biz_type": z.string().describe("消息来源 01:主站，02：芝麻，03:金融云,04:微贷").optional()
}