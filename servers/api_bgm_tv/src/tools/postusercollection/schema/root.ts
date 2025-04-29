import { z } from "zod"

export const inputParamsSchema = {
  "subject_id": z.number().int().gte(1).describe("条目 ID"),
  "type": z.string().optional(),
  "rate": z.number().int().gte(0).lte(10).describe("评分，`0` 表示删除评分").optional(),
  "ep_status": z.number().int().gte(0).describe("只能用于修改书籍条目进度").optional(),
  "vol_status": z.number().int().gte(0).describe("只能用于修改书籍条目进度").optional(),
  "comment": z.string().describe("评价").optional(),
  "private": z.boolean().describe("仅自己可见").optional(),
  "tags": z.array(z.string().describe("不能包含空格")).describe("不传或者 `null` 都会被忽略，传 `[]` 则会删除所有 tag。").optional()
}