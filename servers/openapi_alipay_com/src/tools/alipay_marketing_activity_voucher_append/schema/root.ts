import { z } from "zod"

export const inputParams = {
  "activity_id": z.string().describe("活动id").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。\t\t幂等作用：\t参数不变的情况下，再次请求返回与上一次相同的结果。\t\t外部接入方需保证业务单号唯一。").optional(),
  "voucher_quantity": z.number().int().describe("发行券的数量。。 限制： 券总预算<= 99999999 特别说明： 该字段的含义是追加到的数量。 不可减少，只能增加。").optional()
}