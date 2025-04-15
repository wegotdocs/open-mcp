import { z } from "zod"

export const inputParams = {
  "enterprise_id": z.string().describe("企业id").optional(),
  "employee_id": z.string().describe("员工id").optional(),
  "open_id": z.string().describe("蚂蚁统一会员ID").optional(),
  "user_id": z.string().describe("蚂蚁统一会员ID").optional(),
  "mobile": z.string().describe("员工手机号码").optional()
}