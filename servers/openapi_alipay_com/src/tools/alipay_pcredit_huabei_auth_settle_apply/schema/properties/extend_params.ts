import { z } from "zod"

export const inputParams = {
  "period": z.string().describe("轻会员场景下协议结算周期，由协议生效日期到失效日期拼接(yyyyMMddHHmmss-yyyyMMddHHmmss)，精确到秒。").optional(),
  "period_summary_info": z.string().describe("轻会员费用结算原始信息。详细字段说明：total_real_pay_amount轻会员周期内累计支付宝支付金额， total_pay_count轻会员周期内累计支付宝支付次数，total_discount_amount轻会员周期内累计享受的轻会员优惠。（上面金额字段单位为元，精确小数点后两位）").optional(),
  "quit_type": z.string().describe("用户主动意愿退出：USER_CANCEL_QUIT; 商户结算退出：SETTLE_APPLY_QUIT; 默认值为SETTLE_APPLY_QUIT；这个字段会影响用户在芝麻信用合约的状态").optional(),
  "withhold_index": z.string().describe("代扣期数，周期扣场景PERIOD_SETTLE下需要传递").optional()
}