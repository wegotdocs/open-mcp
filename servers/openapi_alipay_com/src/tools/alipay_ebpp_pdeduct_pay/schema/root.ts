import { z } from "zod"

export const inputParams = {
  "agent_channel": z.string().describe("渠道码，如用户通过机构通过服务窗进来签约则是PUBLICFORM，此值可随意传，只要不空就行").optional(),
  "agent_code": z.string().describe("二级渠道码，预留字段").optional(),
  "agreement_id": z.string().describe("支付宝代扣协议Id").optional(),
  "bill_date": z.string().describe("账期").optional(),
  "bill_key": z.string().describe("户号，缴费单位用于标识每一户的唯一性的").optional(),
  "extend_field": z.string().describe("扩展参数。必须以key value形式定义，\r\t转为json为格式：{\"key1\":\"value1\",\"key2\":\"value2\",\r\t\"key3\":\"value3\",\"key4\":\"value4\"}\r\t 后端会直接转换为MAP对象，转换异常会报参数格式错误").optional(),
  "fine_amount": z.string().describe("滞纳金").optional(),
  "memo": z.string().describe("备注信息").optional(),
  "open_id": z.string().describe("用户UserId在应用AppId下的唯一用户标识").optional(),
  "out_order_no": z.string().describe("商户外部业务流水号").optional(),
  "pay_amount": z.string().describe("扣款金额，支付总金额，包含滞纳金").optional(),
  "pid": z.string().describe("商户PartnerId").optional(),
  "user_id": z.string().describe("用户ID").optional()
}