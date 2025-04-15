import { z } from "zod"

export const inputParams = {
  "detail_id": z.string().describe("营销投放详情id").optional(),
  "status": z.string().describe("投放详情状态值，如：INIT:下线状态，ON_LINE:上线状态，DELETED:删除状态").optional()
}