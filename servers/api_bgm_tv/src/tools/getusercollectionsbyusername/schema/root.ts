import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("设置了用户名之后无法使用 UID。"),
  "subject_type": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(6)]).describe("条目类型\n- `1` 为 书籍\n- `2` 为 动画\n- `3` 为 音乐\n- `4` 为 游戏\n- `6` 为 三次元\n\n没有 `5`").optional(),
  "type": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).describe("- `1`: 想看\n- `2`: 看过\n- `3`: 在看\n- `4`: 搁置\n- `5`: 抛弃").describe("收藏类型，默认为全部\n\n具体含义见 [CollectionType](#model-CollectionType)").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("分页参数").optional(),
  "offset": z.number().int().gte(0).describe("分页参数").optional()
}