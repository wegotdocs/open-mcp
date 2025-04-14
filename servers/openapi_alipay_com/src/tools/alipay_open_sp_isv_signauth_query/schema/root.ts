import { z } from "zod"

export const inputParams = {
  "order_id": z.string().describe("签约授权一体化订单ID\t可通过alipay.open.sp.isv.signauth.create 接口获取").optional()
}