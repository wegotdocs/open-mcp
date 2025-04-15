import { z } from "zod"

export const inputParams = {
  "complain_event_id": z.string().describe("支付宝侧投诉单号").optional(),
  "supplement_content": z.string().describe("回复内容，最多不超过200个字").optional(),
  "supplement_images": z.string().describe("商家补充凭证时的图片id，多个逗号隔开（图片id可以通过\"商户上传处理图片\"接口获取）").optional()
}