import { z } from "zod"

export const inputParams = {
  "target_appid": z.string().describe("小程序id").optional(),
  "status": z.string().describe("审核状态，服务关键词的审核状态，枚举值，不传该字段表示查询所有状态").optional(),
  "page_number": z.number().int().describe("分页参数，分页查询时使用").optional(),
  "page_size": z.number().int().describe("分页参数，分页查询时使用").optional()
}