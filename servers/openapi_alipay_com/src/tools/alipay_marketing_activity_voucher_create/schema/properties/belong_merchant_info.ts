import { z } from "zod"

export const inputParams = {
  "merchant_id": z.string().describe("商户支付宝id，默认品牌名和品牌logo将从该商户信息中获取").optional(),
  "merchant_id_type": z.string().describe("商户支付宝id类型。").optional()
}