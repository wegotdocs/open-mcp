import { z } from "zod"

export const inputParams = {
  "remark": z.string().describe("对于场景 ID 的描述，由商户自定义。").optional(),
  "scene_id": z.string().describe("短链接对应的场景 ID。由商户自定义，仅支持数字、字母及下划线。").optional()
}