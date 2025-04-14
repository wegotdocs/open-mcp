import { z } from "zod"

export const inputParams = {
  "delivery_id": z.string().describe("收藏引导投放活动ID，查询收藏引导活动必填参数").optional()
}