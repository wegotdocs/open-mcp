import { z } from "zod"

export const inputParamsSchema = {
  "episode_id": z.number().int().gte(1).describe("剧集 ID"),
  "type": z.union([z.literal(1), z.literal(2), z.literal(3)]).describe("- `0`: 未收藏\n- `1`: 想看\n- `2`: 看过\n- `3`: 抛弃")
}