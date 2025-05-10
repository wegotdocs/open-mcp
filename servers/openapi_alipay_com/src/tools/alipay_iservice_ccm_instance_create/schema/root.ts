import { z } from "zod"

export const inputParams = {
  "creator_id": z.string().describe("创建人id").optional(),
  "description": z.string().describe("租户实例（数据权限）描述信息").optional(),
  "external_id": z.string().describe("外部id").optional(),
  "name": z.string().describe("租户实例（数据权限）名称，如果名称已经存在，将创建失败").optional()
}