import { z } from "zod"

export const inputParams = {
  "complain_event_id": z.string().describe("支付宝侧投诉单号").optional(),
  "reply_content": z.string().describe("回复留言内容").optional(),
  "reply_images": z.string().describe("商家处理问题反馈时的回复凭证的图片id，多个逗号隔开（图片id可以通过\"商户上传处理图片\"接口获取）").optional()
}