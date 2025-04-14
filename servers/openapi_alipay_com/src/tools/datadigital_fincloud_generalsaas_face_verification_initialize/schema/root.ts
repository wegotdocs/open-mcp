import { z } from "zod"

export const inputParams = {
  "biz_code": z.string().describe("人脸核身具体类型目前仅支持：DATA_DIGITAL_BIZ_CODE_FACE_VERIFICATION").optional(),
  "cert_name": z.string().describe("真实姓名").optional(),
  "cert_no": z.string().describe("证件号").optional(),
  "cert_type": z.string().describe("证件类型，当前枚举支持：\tIDENTITY_CARD：身份证\tRESIDENCE_HK_MC：港澳居民居住证\tRESIDENCE_TAIWAN：台湾居民居住证").optional(),
  "face_reserve_strategy": z.string().describe("人脸保存策略，非必填。具体取值为：reserve(保存活体人脸)/never(不保存活体人脸)，不传默认为reserve").optional(),
  "identity_type": z.string().describe("认证类型，固定值为：CERT_INFO").optional(),
  "nation": z.string().describe("国家地区代码，当证件类型为外国人永久居留证时必填。").optional(),
  "outer_order_no": z.string().describe("商户请求的唯一标识，商户要保证其唯一性，值为64位长度的字母数字组合。建议：前面几位字符是商户自定义的简称，中间可以使用一段时间，后段可以使用一个随机或递增序列").optional(),
  "phone_no": z.string().describe("手机号码").optional()
}