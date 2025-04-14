import { z } from "zod"

export const inputParams = {
  "ccs_instance_id": z.string().describe("部门id（即租户实例ID、数据权限ID）").optional(),
  "creator_id": z.string().describe("创建人id").optional(),
  "description": z.string().describe("角色描述信息").optional(),
  "function_ids": z.array(z.string()).describe("角色关联额功能点id").optional(),
  "name": z.string().describe("角色名").optional()
}