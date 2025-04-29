import { z } from "zod"

export const inputParamsSchema = {
  "subject_id": z.number().int().gte(1).describe("条目 ID"),
  "offset": z.number().int().gte(0).describe("分页参数").optional(),
  "limit": z.number().int().gte(1).lte(1000).describe("分页参数").optional(),
  "episode_type": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)]).describe("本篇 = 0\n特别篇 = 1\nOP = 2\nED = 3\n预告/宣传/广告 = 4\nMAD = 5\n其他 = 6").optional()
}