import { z } from "zod"

export const inputParams = {
  "bank_card_no": z.string().describe("交易对应的银行卡的卡号（支付宝直连和间连合作伙伴均可回传此参数）").optional(),
  "business_license_no": z.string().describe("该账号对应的营业执照号码（支付宝直连和间连合作伙伴均可回传此参数）").optional(),
  "cert_no": z.string().describe("该用户对应的身份证号码（支付宝直连和间连合作伙伴均可回传此参数）").optional(),
  "email_address": z.string().describe("账户注册时填写的邮箱地址(适用于支付宝直连商户回传此信息)").optional(),
  "external_id": z.string().describe("适用于间连业务场景下，商户在银行被分配的ID（适用于支付宝间连合作伙伴回传此信息）").optional(),
  "merch_name": z.string().describe("该笔风险交易购买的具体商品名称（适用于支付宝直连商户回传此信息）").optional(),
  "mobile": z.string().describe("手机（支付宝直连和间连合作伙伴均可回传此参数）").optional(),
  "mobile_ip": z.string().describe("该账号登录合作伙伴平台时的IP地址（适用于支付宝直连商户回传此信息）").optional(),
  "order_ip": z.string().describe("该账户在商户平台下单时的MAC地址或IP地址（适用于支付宝直连商户回传此信息）").optional(),
  "pid": z.string().describe("适用于直连商户场景下的支付宝合作伙伴ID（适用于支付宝直连合作伙伴回传此信息）").optional(),
  "plat_account": z.string().describe("指第三方在商户平台注册成功后，平台给予的账户号（适用于支付宝直连商户回传此信息）").optional(),
  "process_code": z.string().describe("直连场景下，商户对该账户采取的措施：\r\t多种处理结果可调用多次，每次回传一种处理结果。\r\t（01：暂停发货；\r\t02：延迟结算；\r\t03：关停账户；\r\t04：暂停发货+关停账户；\r\t05：延迟结算+关停账户；\r\t06：其他；\r\t07：平台进行退款退订；\r\t08：平台跟用户沟通后，用户撤诉。\r\t间连场景下，商户回传处理结果：\r\t对商户的处理情况：\r\t01：已延迟结算，02：关停商户，99：其他\r\t多重处理结果可调用多次，每次回传一种处理结果").optional(),
  "smid": z.string().describe("指间连交易场景下商家被支付宝分配的ID（适用于支付宝间连合作伙伴回传此信息）").optional(),
  "trade_no": z.string().describe("支付宝推送的风险消息中的交易号（支付宝直连和间连合作伙伴均需回传此参数）").optional()
}