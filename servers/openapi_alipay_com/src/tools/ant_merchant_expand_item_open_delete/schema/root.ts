import { z } from "zod"

export const inputParams = {
  "item_id": z.string().describe("商品ID").optional()
}