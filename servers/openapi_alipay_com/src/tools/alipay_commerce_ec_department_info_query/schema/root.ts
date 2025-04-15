import { z } from "zod"

export const inputParams = {
  "enterprise_id": z.string().describe("企业id").optional(),
  "department_id": z.string().describe("部门id").optional()
}