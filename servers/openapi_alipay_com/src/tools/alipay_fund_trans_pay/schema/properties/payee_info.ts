import { z } from "zod"

export const inputParams = {
  "bankcard_ext_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `bankcard_ext_info` to the tool, first call the tool `expandSchema` with \"/properties/payee_info/properties/bankcard_ext_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "cert_no": z.string().describe("参与方的证件号，支持身份证号、护照号。").optional(),
  "cert_type": z.string().describe("参与方的证件类型。").optional(),
  "ext_info": z.string().describe("描述参与方信息的扩展属性，使用前请与支付宝工程师确认").optional(),
  "identity": z.string().describe("参与方的唯一标识").optional(),
  "identity_type": z.string().describe("参与方的标识类型，目前支持如下类型：\t1、ALIPAY_USER_ID 支付宝的会员ID\t2、ALIPAY_LOGON_ID：支付宝登录号，支持邮箱和手机号格式\t3、ALIPAY_OPEN_ID：支付宝openid\t4、EXPRESS_DC_STFA：对公快捷银行卡\t5、BANKCARD_ACCOUNT:银行卡账号").optional(),
  "merchant_user_info": z.string().describe("商户端的用户信息描述，目前可指定如下属性：\r\tmerchant_user_id：商户端的用户唯一ID\r\tmerchant_user_name：商户端的用户名\r\tmerchant_user_nickname：商户端的用户昵称\r\tmerchant_user_mobile：商户端的手机号").optional(),
  "name": z.string().describe("参与方真实姓名，如果非空，将校验收款支付宝账号姓名一致性。当identity_type=ALIPAY_LOGON_ID时，本字段必填。").optional()
}