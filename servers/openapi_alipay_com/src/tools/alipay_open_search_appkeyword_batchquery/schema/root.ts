import { z } from "zod"

export const inputParams = {
  "target_appid": z.string().describe("小程序id").optional(),
  "status": z.string().describe("关键词的状态，枚举值，不传该字段表示查询所有状态").optional(),
  "page_number": z.number().int().describe("当前页").optional(),
  "page_size": z.number().int().describe("每页显示条数").optional()
}