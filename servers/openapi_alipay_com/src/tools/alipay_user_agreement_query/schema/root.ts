import { z } from "zod"

export const inputParams = {
  "personal_product_code": z.string().describe("协议产品码，商户和支付宝签约时确定，商户可咨询技术支持。").optional(),
  "alipay_user_id": z.string().describe("用户的支付宝账号对应 的支付宝唯一用户号，以 2088 开头的 16 位纯数字 组成。\t本参数与alipay_logon_id若都填写，则以本参数为准，优先级高于 alipay_logon_id。").optional(),
  "alipay_open_id": z.string().describe("用户的支付宝账号对应 的支付宝唯一用户号，\t本参数与alipay_logon_id若都填写，则以本参数为准，优先级高于 alipay_logon_id。").optional(),
  "alipay_logon_id": z.string().describe("用户的支付宝登录账号，支持邮箱或手机号码格式。本参数与alipay_open_id 或 alipay_user_id 同时填写，优先按照 alipay_open_id 或 alipay_user_id 处理。").optional(),
  "sign_scene": z.string().describe("签约场景码，该值需要与系统/页面签约接口调用时传入的值保持一 致。如：周期扣款场景与调用 alipay.user.agreement.page.sign(支付宝个人协议页面签约接口) 签约时的 sign_scene 相同。 \t注意：当传入商户签约号 external_agreement_no 时，该值不能为空或默认值 DEFAULT|DEFAULT。\t").optional(),
  "external_agreement_no": z.string().describe("代扣协议中标示用户的唯一签约号(确保在商户系统中\t唯一)。\t格式规则:支持大写小写字母和数字，最长 32 位。").optional(),
  "third_party_type": z.string().describe("签约第三方主体类型。对于三方协议，表示当前用户和哪一类的第三方主体进行签约。\t默认为PARTNER。").optional(),
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号（用户签约成功后的协议号 ） ，如果传了该参数，其他参数会被忽略").optional()
}