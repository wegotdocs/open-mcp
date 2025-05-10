import { z } from "zod"

export const inputParams = {
  "alipay_account": z.string().describe("商家登录支付宝的邮箱帐号或手机号。（1）默认只支持企业账号类型；（2）将is_individual设置为true，支持个体工商户类型的账号（同时也兼容企业账号）（3）将is_individual设置为true且上传营业执照照片，将同时对具备个体工商户营业执照的商家个人账号认证成为个体工商户账号（同时也兼容企业账号、个体工商户账号）").optional(),
  "app_name": z.string().describe("小程序名称").optional(),
  "cert_name": z.string().describe("营业执照企业名称，如果是“无主体名称个体工商户”则填“个体户+法人姓名”，例如“个体户张三”").optional(),
  "cert_no": z.string().describe("营业执照编码").optional(),
  "contact_name": z.string().describe("商家联系人名称").optional(),
  "contact_phone": z.string().describe("商家联系人手机电话").optional(),
  "is_individual": z.boolean().describe("默认为 false。当设置为 true 时，支持个体工商户的账号类型（同时兼容企业账号）").optional(),
  "legal_personal_name": z.string().describe("商家法人名称").optional(),
  "license_pic": z.string().describe("营业执照图片的Base64编码字符串，图片大小不能超过2M。将is_individual设置为true，当传入该参数后，如果商家账号不是个体工商户类型，将同时为商家升级账号，无需商家额外操作升级（同时支持企业账号、个体工商户账号）").optional(),
  "out_order_no": z.string().describe("开发者外部订单号，自定义传入，通过开发者账号+outOrderNo做业务幂等。（1）该字段会在商家确认创建后通过应用授权通知出参notify_context以out_biz_no属性返回给ISV，应用授权通知订阅参考：<a href=\"https://opendocs.alipay.com/isv/01fejh\">https://opendocs.alipay.com/isv/01fejh</a>。（2）该字段也会通过<a href=\"https://opendocs.alipay.com/mini/03l3f1?pathHash=5c81f4fb&scene=common\">alipay.open.mini.merchant.confirmed</a>返回给订阅方").optional()
}