import { z } from "zod"

export const inputParams = {
  "cert_digest": z.string().describe("cert_digest：\t身份信息摘要").optional(),
  "cert_name": z.string().describe("cert_name：\t填入真实姓名").optional(),
  "cert_no": z.string().describe("cert_no：\t填入姓名相匹配的证件号码").optional(),
  "cert_type": z.string().describe("cert_type：\t1、若为身份证，填IDENTITY_CARD；\t2、若为港澳居民来往内地通行证，填HOME_VISIT_PERMIT_HK_MC；\t3、若为台湾居民来往内地通行证，填HOME_VISIT_PERMIT_TAIWAN；\t4、若为港澳居民居住证，填RESIDENCE_PERMIT_HK_MC；\t5、若为台湾居民居住证，填RESIDENCE_PERMIT_TAIWAN；\t6、外国人永久居留证，填PERMANENT_RESIDENCE_FOREIGNER；").optional(),
  "facial_picture_front": z.string().describe("facial_picture_front：\t活体人脸图片base64串，主要用于离线人脸比对").optional(),
  "identity_type": z.string().describe("identity_type\t1.若本人验证，使用CERT_INFO；\t2.若代他人验证，使用AGENT_CERT_INFO；").optional(),
  "open_id": z.string().describe("open_id：\t开放平台用户ID").optional(),
  "phone_no": z.string().describe("phone_no：\t填写姓名相匹配的手机号").optional(),
  "user_id": z.string().describe("user_id：\t支付宝用户ID").optional()
}