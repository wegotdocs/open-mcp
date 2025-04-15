import { z } from "zod"

export const inputParams = {
  "delivery_content": z.string().describe("收藏引导文案内容，不得超过14个字").optional(),
  "delivery_name": z.string().describe("收藏引导活动名称").optional(),
  "end_time": z.string().describe("活动结束时间").optional(),
  "match_type": z.string().describe("匹配类型").optional(),
  "match_url": z.string().describe("目标页面地址，当匹配类型为TARGETURL时，投放文案仅在当前页面生效").optional(),
  "start_time": z.string().describe("活动开始时间").optional()
}