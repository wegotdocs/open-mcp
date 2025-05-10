import { z } from "zod"

export const inputParams = {
  "department_code": z.string().describe("部门编码").optional(),
  "department_name": z.string().describe("部门名称").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "parent_department_id": z.string().describe("上级部门id").optional()
}