import { z } from "zod"

export const inputParamsSchema = {
  "skuPackageDetails": z.array(z.object({ "level": z.number().int(), "packageCode": z.string(), "unit": z.string(), "enableSplit": z.boolean().describe("true 是，false 否").optional(), "height": z.number().int().gte(0).describe("毫米(mm)"), "width": z.number().int().gte(0).describe("毫米(mm)"), "length": z.number().int().gte(0).describe("毫米(mm)"), "weight": z.number().int().gte(0).describe("毫克(mg)") }).describe("商品包装明细信息")).describe("商品包装明细信息").optional()
}