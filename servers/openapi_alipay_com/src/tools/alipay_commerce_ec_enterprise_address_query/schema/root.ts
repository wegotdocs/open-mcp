import { z } from "zod"

export const inputParams = {
  "enterprise_id": z.string().describe("通过企业码2.0签约接口签约，只填写企业id，无需填写共同账户id和授权签约协议号。").optional(),
  "account_id": z.string().describe("通过企业码1.0接口签约的共同账户，和agreement_no搭配使用。").optional(),
  "agreement_no": z.string().describe("可通过签约消息获取。配合共同账户id使用，当填写企业共同账户id时，此字段必填。").optional(),
  "address_id": z.string().describe("地址id").optional(),
  "city_code": z.string().describe("市").optional(),
  "page_num": z.number().int().describe("页码从1开始").optional(),
  "page_size": z.number().int().describe("每页数据").optional()
}