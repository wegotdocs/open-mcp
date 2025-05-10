import { z } from "zod"

export const inputParamsSchema = {
  "index_id": z.number().int().gte(1).describe("目录 ID"),
  "type": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(6)]).describe("条目类型\n- `1` 为 书籍\n- `2` 为 动画\n- `3` 为 音乐\n- `4` 为 游戏\n- `6` 为 三次元\n\n没有 `5`").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("分页参数").optional(),
  "offset": z.number().int().gte(0).describe("分页参数").optional()
}