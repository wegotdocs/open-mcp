import { z } from "zod"

export const inputParams = {
  "card_rights": z.array(z.object({ "detail": z.string().describe("权益内容详情").optional(), "logo_id": z.string().describe("权益icon图片Id（目前用于开卡授权页使用），通过接口（alipay.offline.material.image.upload）上传图片").optional(), "title": z.string().describe("权益内容标题").optional() })).describe("领卡权益信息").optional(),
  "conf": z.string().describe("配置，预留字段，暂时不用").optional(),
  "open_card_source_type": z.string().describe("开卡渠道类型\t外部系统：ISV （代理运营）\t商户直连对接：MER （商家自运营）").optional(),
  "open_card_url": z.string().describe("开卡链接，必须http、https开头").optional(),
  "source_app_id": z.string().describe("渠道APPID，提供领卡页面的服务提供方").optional()
}