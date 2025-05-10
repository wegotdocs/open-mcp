import { z } from "zod"

export const inputParams = {
  "attachment_explain": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `attachment_explain` to the tool, first call the tool `expandSchema` with \"/properties/config_info/properties/attachment_explain\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "collect_attachement": z.boolean().describe("是否收集附件").optional(),
  "collect_cert_types": z.array(z.string()).describe("收集证件类型列表").optional(),
  "company_no": z.string().describe("公司编号-SF").optional(),
  "contract_validity": z.number().int().describe("文档过期时间").optional(),
  "jump_url": z.string().describe("支付宝小程序跳转").optional(),
  "merchant_mini_sign_url": z.string().describe("商户小程序签署地址（signModel字段值为1时 必填）").optional(),
  "notice_developer_url": z.string().describe("回调地址，签署的过程和签署完成都会回调。").optional(),
  "platform_order_no": z.string().describe("平台订单号").optional(),
  "serial_no": z.string().describe("物流单号").optional(),
  "sign_model": z.number().int().describe("签署方式  0-e签宝小程序签署 1-商户小程序签署  默认0").optional()
}