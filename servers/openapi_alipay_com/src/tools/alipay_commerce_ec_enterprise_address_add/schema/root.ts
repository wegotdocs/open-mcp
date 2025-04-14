import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("通过企业码1.0接口签约的共同账户，和agreement_no搭配使用。").optional(),
  "address": z.string().describe("详细地址最长50个字符").optional(),
  "agreement_no": z.string().describe("可通过签约消息获取。配合共同账户id使用，当填写企业共同账户id时，此字段必填。").optional(),
  "city_code": z.string().describe("市(国家统一行政规划编码)").optional(),
  "city_name": z.string().describe("市").optional(),
  "community": z.string().describe("小区/楼宇").optional(),
  "enterprise_id": z.string().describe("通过企业码2.0签约接口签约，只填写企业id，无需填写共同账户id和授权签约协议号。").optional(),
  "latitude": z.string().describe("纬度").optional(),
  "longitude": z.string().describe("经度").optional(),
  "mark": z.string().describe("备注最长50个字符").optional(),
  "poi_id": z.string().describe("高德地图poi").optional()
}