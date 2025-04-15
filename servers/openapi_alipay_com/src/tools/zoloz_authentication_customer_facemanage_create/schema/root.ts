import { z } from "zod"

export const inputParams = {
  "areacode": z.string().describe("地域编码").optional(),
  "biz_type": z.string().describe("人脸产品能力，预热场景，需要传college，k12，scenic，subway，traffic。具体值视具体场景").optional(),
  "bizscale": z.string().describe("业务量规模").optional(),
  "brandcode": z.string().describe("商户品牌").optional(),
  "devicenum": z.string().describe("商户机具唯一编码，关键参数\t人脸预热，传logicGroupId").optional(),
  "extinfo": z.string().describe("拓展参数").optional(),
  "facetype": z.string().describe("入库类型 IDCARD:身份证 ALIPAY_USER:支付宝用户id, ALIPAY_TEL:手机号入库 CUSTOMER:自定义 DIRECT_CLIENT_PRE：本地预写入 DIRECT_CLIENT：本地客户端库 ENCLOSED：封闭场景").optional(),
  "faceval": z.string().describe("入库用户信息 人脸预热，alipayUid必填").optional(),
  "group": z.string().describe("分组5").optional(),
  "storecode": z.string().describe("门店编码").optional(),
  "validtimes": z.string().describe("有效期天数，如7天、30天、365天").optional()
}