import { z } from "zod"

export const inputParams = {
  "department_code": z.string().describe("部门编码，不同部门的编码不能相同，为空则代表不修改").optional(),
  "department_id": z.string().describe("待修改部门的部门id").optional(),
  "department_name": z.string().describe("部门名称，为空则代表不修改").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "parent_department_id": z.string().describe("上级部门id，为空则代表不修改").optional()
}