import { z } from "zod"

export const inputParams = {
  "directional_type": z.string().describe("定向类型用于规格设置，比如：FIX 表示 固定满X件，APPOINT 表示指定第N件").optional(),
  "specification_quantity": z.number().int().describe("数量").optional(),
  "specification_unit": z.string().describe("单位").optional()
}