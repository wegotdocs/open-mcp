import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("共同账号ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "project_id": z.string().describe("项目id（可空）").optional(),
  "employee_id": z.string().describe("员工UID（可空）").optional(),
  "employee_open_id": z.string().describe("切换open_id后请使用：员工open_id（可空）").optional(),
  "page_num": z.number().int().describe("页数").optional(),
  "page_size": z.number().int().describe("页大小").optional()
}