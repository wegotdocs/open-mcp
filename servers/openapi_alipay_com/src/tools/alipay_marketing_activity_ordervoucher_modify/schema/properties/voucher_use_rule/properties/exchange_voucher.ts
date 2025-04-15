import { z } from "zod"

export const inputParams = {
  "voucher_detail_url": z.string().describe("领(购)券详情页链接，从支付宝公域跳转到服务商(商户)自定义领(购)券详情页。").optional(),
  "voucher_name": z.string().describe("对消费者展示的券(商品)名称。").optional()
}