import { z } from "zod"

export const inputParams = {
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "biz_scene": z.string().describe("查询交易数据场景码").optional(),
  "end_time": z.string().describe("拉取的结算时间，格式yyyy-MM-dd HH:mm:ss，拉取逻辑包含该时刻。").optional(),
  "page_index": z.string().describe("分页页码，从1开始，必须大于0").optional(),
  "page_size": z.string().describe("分页大小，必须大于0，最大设置100").optional(),
  "product_code": z.string().describe("查询交易数据产品码").optional(),
  "start_time": z.string().describe("拉取的起始时间，格式yyyy-MM-dd HH:mm:ss，时间必须早于拉取的截止时间，并且，接口仅限查询用户30天内交易数据，拉取逻辑包含该时刻。").optional()
}