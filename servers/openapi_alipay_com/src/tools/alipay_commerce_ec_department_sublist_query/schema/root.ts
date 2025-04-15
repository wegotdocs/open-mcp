import { z } from "zod"

export const inputParams = {
  "enterprise_id": z.string().describe("企业id").optional(),
  "department_id": z.string().describe("部门id，特殊值 -1 表示查询根部门id").optional()
}