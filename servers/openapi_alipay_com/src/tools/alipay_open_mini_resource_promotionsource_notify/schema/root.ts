import { z } from "zod"

export const inputParams = {
  "author_id": z.string().describe("媒体唤起时传入的支付宝id").optional(),
  "params": z.string().describe("媒体唤起时提供的额外参数值列表，这里可能有多个值，打平以后拼入。即url_decode(authcbparams)").optional(),
  "promotion_id": z.string().describe("推广位id").optional(),
  "promotion_name": z.string().describe("推广位名称").optional(),
  "source": z.string().describe("媒体来源，标识调用方").optional()
}