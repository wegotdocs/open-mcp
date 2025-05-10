import { z } from "zod"

export const inputParams = {
  "benefit": z.string().describe("活动利益点，最多10个字符。仅 ctype 为 activity 类型时才需传入。").optional(),
  "content": z.string().describe("消息正文（支持富文本）").optional(),
  "could_comment": z.string().describe("是否允许评论。枚举支持：\t*T：允许。\t*F：不允许，默认不允许。").optional(),
  "cover": z.string().describe("封面图url，需传入 <a href=\"https://opendocs.alipay.com/apis/api_3/alipay.offline.material.image.upload\">图片上传接口</a>上传图片获取的 image_url。\t注意：尺寸为 996*450，最大不超过3M，支持格式：jpg、.png 。").optional(),
  "ctype": z.string().describe("图文类型，不填默认普通图文。还支持 activity（活动图文）。").optional(),
  "ext_tags": z.string().describe("关键词列表，英文逗号分隔，最多不超过5个").optional(),
  "login_ids": z.string().describe("可预览支付宝账号列表，需要预览时才填写， 英文逗号分隔，最多不超过10个").optional(),
  "title": z.string().describe("标题").optional()
}