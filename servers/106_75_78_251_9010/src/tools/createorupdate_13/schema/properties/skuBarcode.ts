import { z } from "zod"

export const inputParamsSchema = {
  "barcodes": z.array(z.string().describe("商品条码列表")).describe("商品条码列表").optional()
}