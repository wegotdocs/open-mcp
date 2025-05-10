import { z } from "zod"

export const inputParams = {
  "delivery_id": z.string().describe("收藏引导投放活动ID，供查询收藏引导活动配置接口调用\t，当以小程序维度查询数据（query_type为app）时delivery_id为空").optional(),
  "query_type": z.string().describe("查询类型，表示以当前维度进行数据聚合。").optional(),
  "start_date": z.string().describe("查询开始日期，精度为天").optional(),
  "end_date": z.string().describe("查询截止日期，精度为天").optional()
}