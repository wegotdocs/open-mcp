import { z } from "zod"

export const inputParams = {
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号（用户签约成功后的协议号 ），如果传了该参数，其他参数会被忽略\t。\t本参数与 external_agreement_no 不可同时为空。").optional(),
  "alipay_logon_id": z.string().describe("用户的支付宝登录账号，支持邮箱或手机号码格式。本参数与alipay_user_id 不可同时为空，若都填写，则以alipay_user_id 为准。").optional(),
  "alipay_open_id": z.string().describe("用户的支付宝账号对应的支付宝唯一用户号，\t本参数与alipay_logon_id 不可同时为空，若都填写，则以本参数为准，优先级高于alipay_logon_id。").optional(),
  "alipay_user_id": z.string().describe("用户的支付宝账号对应的支付宝唯一用户号，以2088 开头的 16 位纯数字 组成;\r\t本参数与alipay_logon_id 不可同时为空，若都填写，则以本参数为准，优先级高于alipay_logon_id。").optional(),
  "extend_params": z.string().describe("扩展参数").optional(),
  "external_agreement_no": z.string().describe("代扣协议中标示用户的唯一签约号(确保在商户系统中\t唯一)。\t格式规则:支持大写小写字母和数字，最长 32 位。\t注意：若调用 alipay.user.agreement.page.sign(支付宝个人协议页面签约接口) 签约时传入 external_agreement_no 则该值必填且需与签约接口传入值相同。").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "operate_type": z.string().describe("注意：仅异步解约需传入，其余情况无需传递本参数。").optional(),
  "personal_product_code": z.string().describe("协议产品码，商户和支付宝签约时确定，不同业务场景对应不同的签约产品码。").optional(),
  "sign_scene": z.string().describe("签约协议场景，该值需要与系统/页面签约接口调用时传入的值保持一 致。如：周期扣款场景，需与调用 alipay.user.agreement.page.sign(支付宝个人协议页面签约接口) 签约时的 sign_scene 相同。\t当传入商户签约号 external_agreement_no时，场景不能为空或默认值 DEFAULT|DEFAULT。\t").optional(),
  "third_party_type": z.string().describe("签约第三方主体类型。对于三方协议，表示当前用户和哪一类的第三方主体进行签约。").optional()
}