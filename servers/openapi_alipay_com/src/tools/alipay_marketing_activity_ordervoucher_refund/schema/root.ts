import { z } from "zod"

export const inputParams = {
  "activity_id": z.string().describe("活动id"),
  "voucher_code": z.string().describe("已核销待退券的券码"),
  "biz_dt": z.string().describe("当前订单的退券时间。\t\t\t\t格式为：yyyy-MM-dd HH:mm:ss").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。\t\t\t\t幂等作用：\t\t参数不变的情况下，再次请求返回与上一次相同的结果。\t\t\t\t外部接入方需保证业务单号唯一").optional(),
  "total_fee": z.string().describe("当前订单的退款总金额(包含优惠券金额)，单位为元。").optional(),
  "voucher_refund_detail_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `voucher_refund_detail_info` to the tool, first call the tool `expandSchema` with \"/properties/voucher_refund_detail_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}