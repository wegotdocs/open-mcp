import { z } from "zod"

export const inputParams = {
  "department_ids": z.array(z.string()).describe("员工所属部门。如果不传值，则不更新所属部门").optional(),
  "employee_email": z.string().describe("员工邮箱。如果不传值，则不更新邮箱。").optional(),
  "employee_id": z.string().describe("员工id").optional(),
  "employee_mobile": z.string().describe("员工手机号。如果不传值，则不更新手机号。").optional(),
  "employee_name": z.string().describe("员工姓名").optional(),
  "employee_no": z.string().describe("员工工号。如果不传值，则不更新工号。").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "profiles": z.string().describe("个性化信息。如果不传值，则不更新个性化信息。 <a href='https://opendocs.alipay.com/pre-open/0ceh47?pathHash=14fac87c'>详见文档</a>").optional(),
  "role_list": z.array(z.string()).describe("角色列表，目前只支持填一种角色。如果不传值，则不更新角色。").optional()
}