import { z } from "zod"

export const inputParams = {
  "auth_letter_img": z.string().describe("授权函照片（使用图片上传接口），当证件持有人类型为 经办人时，必须上传。其他情况，无需上传").optional(),
  "card_back_img": z.string().describe("法人/经营者证件反面照（使用图片上传接口的image_id）。当证件类型为身份证时，此字段必传；当证件类型为非身份证时，此字段非必传。").optional(),
  "card_front_img": z.string().describe("法人/经营者证件正面照（使用图片上传接口返回的image_id）").optional(),
  "card_no": z.string().describe("证件号码").optional(),
  "card_type": z.string().describe("证件类型，枚举值：中国大陆居民-身份证(RESIDENT)、其他国家或地区居民-护照(PASSPORT)、中国港澳居民-来往内地通行证(PASSPORT_HK_MO)、中国台湾居民-来往大陆通行证(PASSPORT_TWN)、港澳居民居住证（RESIDENCE_PERMIT_HM）、台湾居民居住证（RESIDENCE_PERMIT_TW）、外国人永久居住证（PERMANENT_RESIDENCE_FOREIGNER）。个体户/企业/事业单位/社会组织：可选择任一证件类型，政府机关、小微商户仅支持身份证类型。").optional(),
  "effect_time": z.string().describe("证件生效时间").optional(),
  "expire_time": z.string().describe("证件过期时间").optional(),
  "is_benefit_person": z.boolean().describe("经营者/法人是否为受益人").optional(),
  "legal_type": z.string().describe("证件持有人类型：\t- 法人  LEGAL_PERSON\t- 经办人  AGENT_PERSON\t主体类型为政府机关、事业单位时选传：\t（1）若上传的是法人证件，则不需要上传该字段。\t（2）若因特殊情况，无法提供法人证件时，可上传经办人。\t主体类型为企业、个体户、社会组织、小微商户时，默认为经营者/法人，不需要上传该字段。").optional(),
  "person_name": z.string().describe("法人姓名").optional()
}