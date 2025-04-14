import { z } from "zod"

export const inputParams = {
  "action_type": z.string().describe("DEFAULT_SETTLE 默认结算模式;\tPAY_TO_ZERO 支付转0元；").optional(),
  "agreement_id": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号。").optional(),
  "alipay_open_id": z.string().describe("买家在支付宝的用户id").optional(),
  "alipay_user_id": z.string().describe("买家在支付宝的用户id").optional(),
  "out_request_no": z.string().describe("商户本次操作的请求流水号，用于标示请求流水的唯一性，不能包含除中文、英文、数字以外的字符，需要保证在商户端不重复。").optional(),
  "partner_id": z.string().describe("商户ID").optional(),
  "pay_amount": z.string().describe("需要支付的金额，单位为：元（人民币），精确到小数点后两位").optional(),
  "settle_extend_params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `settle_extend_params` to the tool, first call the tool `expandSchema` with \"/properties/settle_extend_params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "total_discount_amount": z.string().describe("芝麻GO任务开始到到期过程中和任务相关享受的总优惠金额，单位为：元（人民币），精确到小数点后两位。").optional(),
  "total_real_pay_amount": z.string().describe("芝麻GO任务开始到到期过程中和任务相关支付的总金额，单位为：元（人民币），精确到小数点后两位。").optional(),
  "total_task_count": z.string().describe("芝麻GO任务开始到到期过程中和任务相关完成的任务次数").optional(),
  "withhold_plan_no": z.string().describe("芝麻GO结算时，需要传入的扣款单据号。来源于协议到期通知消息，外部商户接入时，该参数必填").optional()
}