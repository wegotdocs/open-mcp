import { z } from "zod"

export const inputParams = {
  "articles": z.array(z.object({ "action_name": z.string().describe("链接文字").optional(), "desc": z.string().describe("图文消息内容").optional(), "image_url": z.string().describe("图片链接，对于多条图文消息的第一条消息，该字段不能为空; 请先调用<a href=\"https://docs.open.alipay.com/api_3/alipay.offline.material.image.upload\"> 图片上传接口</a>获得图片url").optional(), "title": z.string().describe("图文消息标题").optional(), "url": z.string().describe("点击图文消息跳转的链接").optional() })).describe("图文消息子消息项集合，单条消息最多6个子项，否则会发送失败").optional(),
  "msg_type": z.string().describe("消息类型，text：文本类型，image-text：图文类型。当消息类型为text时，text参数必传，当消息类型为image-text时，articles参数必传").optional(),
  "text": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `text` to the tool, first call the tool `expandSchema` with \"/properties/material/properties/text\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}