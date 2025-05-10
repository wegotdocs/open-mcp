import { z } from "zod"

export const inputParams = {
  "create_share_code": z.boolean().describe("是否需要生成吱口令，默认不生成").optional(),
  "department_ids": z.array(z.string()).describe("员工所属部门，支持多个部门，不传默认为根部门").optional(),
  "employee_cert_no": z.string().describe("员工证件号码").optional(),
  "employee_cert_type": z.string().describe("员工证件类型").optional(),
  "employee_email": z.string().describe("员工邮箱").optional(),
  "employee_mobile": z.string().describe("员工手机号").optional(),
  "employee_name": z.string().describe("员工姓名").optional(),
  "employee_no": z.string().describe("员工编号/工号").optional(),
  "encrypt_cert_no": z.string().describe("加密证件号，需与证件类型搭配使用，可替代证件号码(employee_cert_no)字段").optional(),
  "encrypt_mobile": z.string().describe("加密手机号，可替代手机号(employee_mobile)字段").optional(),
  "enterprise_id": z.string().describe("员工所属企业ID").optional(),
  "free_sign_token": z.string().describe("员工签约授权密钥；<br/>\t该密钥需联系企业码业务小二申请，当传入密钥有效，则员工添加时会默认签约企业因公付，并激活员工。").optional(),
  "identity": z.string().describe("员工身份唯一标识").optional(),
  "identity_open_id": z.string().describe("当身份类型为支付宝会员ID(identity_type=ALIPAY_USER_ID)时，传入user_id对应的open_id").optional(),
  "identity_type": z.string().describe("员工身份类型").optional(),
  "iot_check_type": z.string().describe("员工签约开通企业刷脸付时，刷脸核身的核验方式").optional(),
  "profiles": z.string().describe("个性化信息 <a href='https://opendocs.alipay.com/pre-open/0ceh47?pathHash=14fac87c'>详见文档</a>").optional(),
  "sign_return_url": z.string().describe("员工签约后回跳地址；支持 alipay scheme 协议地址，不传默认跳转企业码小程序首页").optional(),
  "sign_url_carry_info": z.boolean().describe("签约链接页面是否需要自动回显员工的身份信息（手机或邮箱），默认不显示").optional(),
  "withholding_sign_str": z.string().describe("代扣签约字符串，员工需签约开通代扣时必传，否则无需传值").optional()
}