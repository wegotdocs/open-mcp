import { z } from "zod"

export const inputParams = {
  "cert_image": z.string().describe("证照图片（使用图片上传接口）").optional(),
  "cert_no": z.string().describe("证件编号").optional(),
  "cert_type": z.string().describe("登记证书类型时必填，枚举：统一社会信用代码证书（UNIT_SOCIAL_CREDIT）、慈善组织公开募捐资格证书（CHARITY_ORG_SOLICIT），社会团体法人登记证书（SOCIAL_ORG_LEGAL），民办非企业单位登记证书（CIVIL_UN_ENT），基金会法人登记证书（FOUNDATION_LEGAL_PERSON），农民专业合作社法人营业执照（FARMERS_COOPERATE），宗教活动场所登记证（RELIGION_PLACES），其他证书/批文/证明（OTHER_REG_CERT）").optional(),
  "effect_time": z.string().describe("证照生效时间").optional(),
  "expire_time": z.string().describe("证照过期时间，yyyy-mm-dd格式，如果是长期有效时传“forever”").optional(),
  "legal_person_name": z.string().describe("证照法人姓名").optional(),
  "merchant_name": z.string().describe("证照商户名称").optional(),
  "register_address": z.string().describe("证照注册地址").optional()
}