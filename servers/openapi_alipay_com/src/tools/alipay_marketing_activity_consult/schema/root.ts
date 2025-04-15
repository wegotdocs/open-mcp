import { z } from "zod"

export const inputParams = {
  "consult_activity_info_list": z.array(z.object({ "activity_id": z.string().describe("活动id").optional() })).describe("待咨询的活动信息列表").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "merchant_id": z.string().describe("商户PID,默认为当前接口调用商户。").optional(),
  "open_id": z.string().describe("领券的支付宝用户openId").optional(),
  "user_id": z.string().describe("领券的用户uid").optional()
}