import { z } from "zod"

export const inputParams = {
  "enterprise_id": z.string().describe("企业id").optional(),
  "department_id": z.string().describe("部门id").optional(),
  "page_num": z.number().int().describe("查询页数").optional(),
  "page_size": z.number().int().describe("每页查询大小，限制最大为1000").optional()
}