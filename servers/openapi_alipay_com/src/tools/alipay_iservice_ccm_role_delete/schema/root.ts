import { z } from "zod"

export const inputParams = {
  "id": z.string().describe("角色id").optional(),
  "ccs_instance_id": z.string().describe("部门id（即租户实例ID、数据权限ID），如果不传入，使用租户id").optional()
}