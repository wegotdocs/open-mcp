import { z } from "zod"

export const inputParams = {
  "user_id": z.string().describe("蚂蚁统一会员ID，如果未开启openid改造，则此值必传").optional(),
  "open_id": z.string().describe("蚂蚁统一会员ID，蚂蚁统一会员ID，如果已完成openid改造，则此值必传").optional(),
  "scopes": z.string().describe("查询授权关系所关联的scope，半角逗号分隔的列表，且不允许有重复值").optional()
}