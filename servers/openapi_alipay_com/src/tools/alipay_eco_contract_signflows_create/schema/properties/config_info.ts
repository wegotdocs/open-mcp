import { z } from "zod"

export const inputParams = {
  "attachment_explain": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `attachment_explain` to the tool, first call the tool `expandSchema` with \"/properties/config_info/properties/attachment_explain\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "auto_archive": z.boolean().describe("签署完成是否自动归档，默认true，如果false，则归档需要调用签署流程归档接口").optional(),
  "collect_attachement": z.boolean().describe("是否收集附件（需签署人上传身份证或者其他文件的，需设置为true）").optional(),
  "company_no": z.string().describe("物流公司编号（目前仅支持顺丰\"SF\"）\t注：避免影响生产订单，联调及测试环境请传入SF_TEST。").optional(),
  "contract_validity": z.number().int().describe("合同过期时间：该参数设置的时间若到期，则会触发流程文件过期通知").optional(),
  "jump_url": z.string().describe("签署完成后跳转商户小程序的地址（signModel字段值为2时 选填）").optional(),
  "merchant_mini_sign_url": z.string().describe("商户小程序签署地址（signModel字段值为1时 必填）").optional(),
  "notice_developer_url": z.string().describe("https://esign.cn/callback").optional(),
  "platform_order_no": z.string().describe("平台订单号，可将商户订单与电子合同进行关联。用户通过支付宝官方小程序 合同管家 查看合同时，可快速进入商家的小程序及对应的订单详情页，为商家的小程序提供了流量入口，提高用户的活跃度和留存率；").optional(),
  "serial_no": z.string().describe("12或15位物流单号").optional(),
  "sign_model": z.number().int().describe("快递扫码签收方式：\t1-商户小程序：扫码后跳转商户小程序进行签收；\t0-e签宝小程序：如商户没有支付宝小程序，可使用e签宝小程序完成签收。").optional(),
  "specify_attachment_infos": z.array(z.object({ "allow_more_uploads": z.boolean().describe("是否允许上传更多附件，默认值为false。开启后，除了“collect_common_codes”中指定的附件，签署人可自由上传至多10张图片。").optional(), "allow_more_uploads_max_count": z.number().int().describe("允许上传更多附件时，可上传的最大附件数，一次流程中累计的上传附件数至多30（含“附件列表”数量）").optional(), "collect_cert_types": z.array(z.string()).describe("需要签署人上传的证件照片，可进行ORC识别，目前仅支持IDCARD").optional(), "collect_common_codes": z.array(z.string()).describe("需要签署人上传的其他附件列表，即attachment_explain.details中定义的code列表").optional(), "third_party_user_id": z.string().describe("个人唯一标识，对应签署区中指定的签署人").optional() })).describe("指定签署人需要上传的附件列表，例如：A、B、C三方签署，A需上传附件1，B需指定附件2，C需上传附件1,2,3").optional()
}