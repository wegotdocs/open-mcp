import { z } from "zod"

export const inputParamsSchema = {
  "episode_id": z.number().int().gte(1).describe("剧集 ID")
}