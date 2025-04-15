import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业共同账户id").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "amount": z.number().int().describe("消费金额").optional(),
  "deal_time": z.string().describe("交易发生时间").optional(),
  "employee_id": z.string().describe("员工id").optional(),
  "employee_id_type": z.number().int().describe("员工账号类型").optional(),
  "employee_open_id": z.string().describe("员工开放id").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "extend": z.string().describe("拓展参数").optional(),
  "is_off_set": z.number().int().describe("交易类型").optional(),
  "out_source_id": z.string().describe("外部交易支付单号").optional(),
  "platform": z.string().describe("外部平台编码").optional(),
  "relate_no": z.string().describe("外部交易退款单号").optional(),
  "standard_id": z.string().describe("费控规则ID").optional()
}