import { z } from "zod"

export const inputParams = {
  "ccs_instance_id": z.string().describe("租户实例id（数据权限id），不填，则使用默认的租户实例id").optional(),
  "id": z.string().describe("在线服务记录id").optional()
}