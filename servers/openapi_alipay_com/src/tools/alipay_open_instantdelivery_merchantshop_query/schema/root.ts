import { z } from "zod"

export const inputParams = {
  "shop_no": z.string().describe("商家门店编码。").optional()
}