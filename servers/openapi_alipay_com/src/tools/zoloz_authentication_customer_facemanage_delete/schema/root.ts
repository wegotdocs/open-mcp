import { z } from "zod"

export const inputParams = {
  "areacode": z.string().describe("地域编码").optional(),
  "biz_type": z.string().describe("人脸产品能力").optional(),
  "bizscale": z.string().describe("业务量").optional(),
  "brandcode": z.string().describe("商户品牌").optional(),
  "devicenum": z.string().describe("商户机具唯一编码，关键参数").optional(),
  "extinfo": z.string().describe("拓展参数").optional(),
  "facetype": z.string().describe("入库类型\tIDCARD:身份证\tALIPAY_USER:支付宝用户id,\tALIPAY_TEL:手机号入库\tCUSTOMER:自定义").optional(),
  "faceval": z.string().describe("入库用户信息").optional(),
  "group": z.string().describe("分组").optional(),
  "storecode": z.string().describe("门店编码").optional(),
  "validtimes": z.string().describe("有效期天数，如7天、30天、365天").optional()
}