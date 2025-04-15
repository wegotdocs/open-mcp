import { z } from "zod"

export const inputParams = {
  "benefit": z.string().describe("活动利益点，图文类型ctype为activity类型时才需要传，最多10个字符").optional(),
  "content": z.string().describe("消息正文（支持富文本）").optional(),
  "content_id": z.string().describe("内容id").optional(),
  "could_comment": z.string().describe("是否允许评论 T:允许 F:不允许，默认不允许").optional(),
  "cover": z.string().describe("封面图url, 尺寸为996*450，最大不超过3M，支持格式:.jpg、.png ，请先调用<ahref=\"https://docs.open.alipay.com/api_3/alipay.offline.material.image.upload\"> 图片上传接口</a>获得图片url。").optional(),
  "ctype": z.string().describe("图文类型  activity: 活动图文，不填默认普通图文").optional(),
  "ext_tags": z.string().describe("关键词列表，英文逗号分隔，最多不超过5个").optional(),
  "login_ids": z.string().describe("可预览支付宝账号列表，需要预览时才填写， 英文逗号分隔，最多不超过10个").optional(),
  "title": z.string().describe("标题").optional()
}