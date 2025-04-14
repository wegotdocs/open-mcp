import { z } from "zod"

export const inputParams = {
  "id": z.string().describe("部门id（即租户实例ID、数据权限ID）").optional(),
  "external_id": z.string().describe("外部id").optional()
}