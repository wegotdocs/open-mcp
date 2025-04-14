import { z } from "zod"

export const inputParams = {
  "adapter_type": z.string().describe("制度适用范围，支持配置全员、指定员工和指定部门").optional(),
  "owner_id_list": z.array(z.string()).describe("适用范围归属id列表").optional(),
  "owner_type": z.string().describe("员工id类型").optional()
}