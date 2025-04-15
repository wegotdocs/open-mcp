import { z } from "zod"

export const inputParams = {
  "activity_id": z.string().describe("活动id"),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。\t\t幂等作用：\t参数不变的情况下，再次请求返回与上一次相同的结果。\t\t外部接入方需保证业务单号唯一。").optional(),
  "voucher_quantity": z.number().int().describe("发行券的数量。\t\t限制：\t券总预算<= 999999\t\t特别说明：\t该字段的含义是追加到的数量。\t不可减少，只能增加。\t\tcode_mode=\tMERCHANT_UPLOAD 的情况下，voucher_quantity 需要与导入码的总数量保持一致（即历史导入数量 + 追加导入数量）。").optional()
}