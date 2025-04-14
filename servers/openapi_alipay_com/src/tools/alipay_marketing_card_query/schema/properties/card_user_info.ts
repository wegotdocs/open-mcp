import { z } from "zod"

export const inputParams = {
  "open_id": z.string().describe("用户open_id").optional(),
  "user_uni_id": z.string().describe("用户唯一标识, 根据user_uni_id_type类型来定 （目前暂支持支付宝userId）\t\t支付宝userId说明：支付宝用户号是以2088开头的16位纯数字组成").optional(),
  "user_uni_id_type": z.string().describe("用户唯一标识类型").optional()
}