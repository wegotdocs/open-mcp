import { z } from "zod"

export const inputParams = {
  "agent_channel": z.string().describe("分配给外部机构发起扣款时的渠道码。朗新为LANGXIN").optional(),
  "agent_code": z.string().describe("二级渠道码，预留字段").optional(),
  "agreement_id": z.string().describe("支付宝代扣协议Id").optional(),
  "bill_date": z.string().describe("账期").optional(),
  "bill_key": z.string().describe("户号").optional(),
  "extend_field": z.string().describe("扩展字段").optional(),
  "fine_amount": z.string().describe("滞纳金").optional(),
  "memo": z.string().describe("备注信息").optional(),
  "open_id": z.string().describe("用户UserId在应用AppId下的唯一用户标识").optional(),
  "out_order_no": z.string().describe("商户外部业务流水号").optional(),
  "pay_amount": z.string().describe("扣款金额，支付总金额，包含滞纳金").optional(),
  "pid": z.string().describe("商户partnerId").optional(),
  "user_id": z.string().describe("用户ID").optional()
}