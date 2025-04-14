import { z } from "zod"

export const inputParams = {
  "discount_amount": z.string().describe("商户回传的优惠金额，如用户享受的红包金额，单位元").optional(),
  "discount_desc": z.string().describe("商户数据回传的优惠信息的名称。").optional()
}