import { z } from "zod"

export const inputParams = {
  "ccs_instance_id": z.string().describe("部门id（即租户实例ID、数据权限ID），不传默认使用租户id").optional(),
  "description": z.string().describe("描述信息").optional(),
  "function_ids": z.array(z.string()).describe("角色关联额功能点id").optional(),
  "id": z.string().describe("角色id").optional(),
  "updater_id": z.string().describe("最后修改人id").optional()
}