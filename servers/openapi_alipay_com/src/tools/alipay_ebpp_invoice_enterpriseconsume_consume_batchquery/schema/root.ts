import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "consumption_end": z.string().describe("交易结束时间，格式：yyyy-MM-dd HH:mm:ss").optional(),
  "consumption_start": z.string().describe("交易开始时间，格式：yyyy-MM-dd HH:mm:ss").optional(),
  "employee_list": z.array(z.string()).describe("员工支付宝UID列表，单次传入最大员工数量为10").optional(),
  "employee_open_ids": z.array(z.string()).describe("员工支付宝UID列表，单次传入最大员工数量为10").optional()
}