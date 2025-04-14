import { z } from "zod"

export const inputParams = {
  "articles": z.array(z.object({ "action_name": z.string().describe("链接文字").optional(), "desc": z.string().describe("图文消息内容").optional(), "image_url": z.string().describe("图片链接，对于多条图文消息的第一条消息，该字段不能为空; 请先调用<a href=\"https://docs.open.alipay.com/api_3/alipay.offline.material.image.upload\"> 图片上传接口</a>获得图片url").optional(), "title": z.string().describe("图文消息标题").optional(), "url": z.string().describe("点击图文消息跳转的链接").optional() })).describe("msg_type为image-text，本参数必填。\t").optional(),
  "chat": z.string().describe("是否为聊天消息。枚举支持：\t*0：代表非聊天消息，消息显示在生活号主页，默认为 0。\t*1：代表是聊天消息，消息显示在咨询反馈列表页。").optional(),
  "event_type": z.string().describe("触发消息的事件类型，默认为空。代表商户未改造。如果是follow，代表关注消息。click代表菜单点击，enter_ppchat代表进入事件；请注意事件类型的大小写").optional(),
  "msg_type": z.string().describe("消息类型。枚举支持：\t* text：表示文本消息；\t* image-text：表示图文消息。").optional(),
  "open_id": z.string().describe("支付宝用户的唯一标识").optional(),
  "text": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `text` to the tool, first call the tool `expandSchema` with \"/properties/text\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "to_user_id": z.string().describe("消息接收用户的userid").optional()
}