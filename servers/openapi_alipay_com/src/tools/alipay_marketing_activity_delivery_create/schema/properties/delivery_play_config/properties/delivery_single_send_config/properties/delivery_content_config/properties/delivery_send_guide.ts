import { z } from "zod"

export const inputParams = {
  "delivery_guide_url": z.string().describe("引导链接，从支付宝公域跳转到服务商(商户)承接页的引导链接。").optional()
}