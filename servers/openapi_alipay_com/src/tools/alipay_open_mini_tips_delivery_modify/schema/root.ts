import { z } from "zod"

export const inputParams = {
  "delivery_id": z.string().describe("收藏引导投放活动ID").optional(),
  "operate_type": z.string().describe("活动投放操作类型").optional()
}