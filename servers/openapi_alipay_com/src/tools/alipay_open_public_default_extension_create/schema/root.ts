import { z } from "zod"

export const inputParams = {
  "areas": z.array(z.object({ "goto_url": z.string().describe("跳转链接，当type为\"image\"时必传，必须是https或alipays开头的url链接。已废弃").optional(), "height": z.number().int().describe("扩展区高度，当type值为\"h5\"时必填，取值范围为200-500的整数,单位是px").optional(), "name": z.string().describe("扩展区名字").optional(), "type": z.string().describe("扩展区类型，当前支持的值为h5，表示扩展区内容类型为h5。").optional(), "url": z.string().describe("扩展区url，传入h5页面url，必须是https开头的链接").optional() })).describe("默认扩展区列表，最多包含3个扩展区").optional()
}