import { z } from "zod"

export const inputParams = {
  "complain_event_id": z.string().describe("支付宝侧投诉单号").optional(),
  "feedback_code": z.string().describe("反馈类目ID\t00:使用体验保障金退款；\t02:通过其他方式退款;\t03:已发货;\t04:其他;\t05:已完成售后服务;\t06:非我方责任范围；").optional(),
  "feedback_content": z.string().describe("反馈内容，字数不超过200个字").optional(),
  "feedback_images": z.string().describe("商家处理投诉时反馈凭证的图片id，多个逗号隔开（图片id可以通过\"商户上传处理图片\"接口获取）").optional(),
  "operator": z.string().describe("处理投诉人，字数不超过6个字").optional()
}