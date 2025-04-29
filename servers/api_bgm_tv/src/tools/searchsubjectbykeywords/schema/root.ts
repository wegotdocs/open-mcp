import { z } from "zod"

export const inputParamsSchema = {
  "keywords": z.string().describe("关键词 <br> 需要 URL Encode"),
  "type": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(6)]).describe("条目类型 <br> 1 = book <br> 2 = anime <br> 3 = music <br> 4 = game <br> 6 = real").optional(),
  "responseGroup": z.enum(["small","medium","large"]).describe("返回数据大小").optional(),
  "start": z.number().int().describe("开始条数").optional(),
  "max_results": z.number().int().lte(25).describe("每页条数 <br> 最多 25").optional()
}