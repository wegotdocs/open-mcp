import { z } from "zod"

export const inputParams = {
  "scene_id": z.string().describe("场景Id，最长32位，英文字母、数字以及下划线，开发者自定义").optional()
}