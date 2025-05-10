import { z } from "zod"

export const inputParams = {
  "accept_electronic": z.boolean().describe("是否接受电子票 true:是，false:否").optional(),
  "address": z.string().describe("公司注册地址，公司营业执照上登记的住址，一般纳税人必须填写，小规模纳税人无需填写").optional(),
  "addressing": z.boolean().describe("开票资料pid寻址方式 true:pid寻址mid,优先以mid维度保存开票资料,若无mid则以pid维度保存开票资料 false:不寻址mid,以pid维度保存开票资料;非主站商户体系都是以pid（ipRoleId）维度保存开票资料，该值直接填为false").optional(),
  "auto": z.boolean().describe("是否自动申请开票 true:是，false:否").optional(),
  "bank_account": z.string().describe("银行账户，公司银行账号\r\t一般纳税人必须填写，小规模纳税人无需填写").optional(),
  "bank_name": z.string().describe("开户行，办理银行开户手续的营业网点\r\t一般纳税人必须填写，小规模纳税人无需填写").optional(),
  "business_licence_url": z.string().describe("营业执照地址，营业执照上传oss上的地址").optional(),
  "hold": z.boolean().describe("是否暂停开票，商户添加的开票资料就是不暂停开票，如果后续要暂停开票，只能去结算中台处理。").optional(),
  "ip_role_id": z.string().describe("商户的pid（ipRoleId）").optional(),
  "open_account_permit_url": z.string().describe("银行开户许可证附件，银行开户许可证上传oss上的地址").optional(),
  "operator": z.string().describe("当前操作人").optional(),
  "operator_type": z.string().describe("当前操作人类型,01:商户 02:管理员(小二)").optional(),
  "other_qualification_url": z.string().describe("其它资质证明地址，其他资质证明附件上传oss上的地址").optional(),
  "ou": z.boolean().describe("外部只允许添加商户开票资料，该值填写为false").optional(),
  "tax_no": z.string().describe("纳税人识别号，税务登记证上的号码。一般纳税人必须填写，小规模纳税人如果是商户也必须填写，个人无需填写").optional(),
  "tax_payer_quali_valid": z.string().describe("纳税人资格开始时间 （格式：时间戳）\r\t一般纳税人必须填写，小规模纳税人无需填写").optional(),
  "tax_payer_qualification": z.string().describe("纳税人资格种类，01：一般纳税人；02：小规模纳税人；03：国际商户").optional(),
  "tax_qualification_url": z.string().describe("一般纳税人资格证书地址，一般纳税人资格证书上传oss上的地址").optional(),
  "tax_reg_cert_url": z.string().describe("税务登记证地址，税务登记证上传oss上的地址").optional(),
  "telephone": z.string().describe("公司注册电话（手机号和座机均可）\r\t一般纳税人必须填写，小规模纳税人无需填写").optional(),
  "title": z.string().describe("发票抬头，票面信息上的抬头信息").optional(),
  "user_mail_info_order_list": z.array(z.object({ "city": z.string().describe("联系所在城市").optional(), "country": z.string().describe("联系人国家").optional(), "county_district": z.string().describe("联系人所在县/区").optional(), "detail_address": z.string().describe("联系所在详细地址").optional(), "email": z.string().describe("电子邮箱").optional(), "ip_role_id": z.string().describe("商户ipRole(pid)").optional(), "name": z.string().describe("联系人名字").optional(), "province": z.string().describe("联系人省份").optional(), "street": z.string().describe("联系人所在街道").optional(), "telephone": z.string().describe("联系人电话").optional() })).describe("收件人列表,若不修改此项可以不填\r\t选择非电子票时，邮寄信息必填，且保证邮寄信息的ipRoleId和开票资料的ipRoleId相等").optional()
}