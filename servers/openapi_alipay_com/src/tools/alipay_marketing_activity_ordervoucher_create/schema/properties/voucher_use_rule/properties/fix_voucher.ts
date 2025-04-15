import { z } from "zod"

export const inputParams = {
  "amount": z.string().describe("面额，每张代金券可以抵扣的金额。").optional(),
  "floor_amount": z.string().describe("门槛金额。该字段不填写，认为无门槛。").optional(),
  "goods_name": z.string().describe("商品名称。").optional()
}