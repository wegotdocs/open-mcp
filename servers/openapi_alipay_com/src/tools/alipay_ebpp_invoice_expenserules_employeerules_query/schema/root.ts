import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "employee_id": z.string().describe("未切换open_id时使用此字段：员工ID").optional(),
  "employee_open_id": z.string().describe("切换open_id后使用此字段：员工的open_id").optional(),
  "page_num": z.number().int().describe("页码，默认值为1").optional(),
  "page_size": z.number().int().describe("每页行数，默认值为20").optional()
}