import { z } from "zod"

export const inputParams = {
  "goods_detail": z.string().describe("商品明细列表").optional()
}