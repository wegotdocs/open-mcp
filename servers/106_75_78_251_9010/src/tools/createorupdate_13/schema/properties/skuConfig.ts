import { z } from "zod"

export const inputParamsSchema = {
  "enableSn": z.boolean().describe("true 启用，false 禁用").optional(),
  "enableEffective": z.boolean().describe("true 启用，false 禁用").optional(),
  "shelfLife": z.number().int().optional(),
  "effectiveDays": z.number().int().optional(),
  "barcodeRuleCode": z.string().optional(),
  "heat": z.string().optional(),
  "maxStock": z.number().int().optional(),
  "minStock": z.number().int().optional(),
  "calculateHeat": z.boolean().describe("true 是，false 否").optional(),
  "noBarcode": z.boolean().describe("true 是，false 否").optional()
}