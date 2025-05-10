import { z } from "zod"

export const inputParams = {
  "department_id": z.string().describe("部门id").optional(),
  "enterprise_id": z.string().describe("企业id").optional()
}