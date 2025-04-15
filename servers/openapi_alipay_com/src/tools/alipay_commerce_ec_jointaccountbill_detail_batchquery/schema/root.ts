import { z } from "zod"

export const inputParams = {
  "enterprise_id": z.string().describe("企业ID").optional(),
  "biz_scene": z.string().describe("业务场景。不传默认为ISV_DEFAULT").optional(),
  "user_id": z.string().describe("员工支付宝UID").optional(),
  "open_id": z.string().describe("员工支付宝UID").optional(),
  "employee_id": z.string().describe("员工id").optional(),
  "page_num": z.string().describe("页码").optional(),
  "page_size": z.string().describe("每页大小").optional(),
  "start_date": z.string().describe("起始日期").optional(),
  "end_date": z.string().describe("截止日期").optional()
}