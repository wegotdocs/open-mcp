import { z } from "zod"

export const inputParams = {
  "enterprise_id": z.string().describe("通过企业码2.0签约接口签约，只填写企业id，无需填写共同账户id和授权签约协议号。").optional(),
  "account_id": z.string().describe("通过企业码1.0接口签约的共同账户，和agreement_no搭配使用。(为兼容企业码1.0老接口的参数，已过时，新接客户请传企业ID)").optional(),
  "agreement_no": z.string().describe("可通过签约消息获取。配合共同账户id使用，当填写企业共同账户id时，此字段必填。(为兼容企业码1.0老接口的参数，已过时，新接客户请传企业ID)").optional()
}