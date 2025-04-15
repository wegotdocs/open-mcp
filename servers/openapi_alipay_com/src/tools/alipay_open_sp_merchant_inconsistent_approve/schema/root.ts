import { z } from "zod"

export const inputParams = {
  "back_card": z.string().describe("身份证背面照，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。 请传入<a href=\"https://opendocs.alipay.com/apis/01ea4t\">alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。").optional(),
  "commitment_letter": z.string().describe("实际经营人承诺函照片，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。 请传入<a href=\"https://opendocs.alipay.com/apis/01ea4t\">alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。 该资质是否必传请参见报名资质要求。").optional(),
  "front_card": z.string().describe("身份证正面照，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式. 请传<a href=\"https://opendocs.alipay.com/apis/01ea4t\">alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。").optional(),
  "handheld_business_license": z.string().describe("手持营业执照合照，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。 请传入<a href=\"https://opendocs.alipay.com/apis/01ea4t\">alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。 该资质是否必传请参见报名资质要求。").optional(),
  "handheld_card": z.string().describe("手持身份证合照，要求证件文本信息清晰可见，图片文件大小在 50K-5M 之间，不限制长宽，支持 png、bmp、gif、jpg、jpeg 格式。 请传入<a href=\"https://opendocs.alipay.com/apis/01ea4t\">alipay.open.sp.image.upload</a>(图片上传接口) 返回的 image_id。 该资质是否必传请参见报名资质要求。").optional(),
  "item_code": z.string().describe("服务优选商品编码").optional(),
  "merchant_pid": z.string().describe("商家pid").optional(),
  "mini_appid": z.string().describe("商家小程序appId").optional(),
  "out_biz_no": z.string().describe("外部业务号，需不重复").optional(),
  "promotor_pid": z.string().describe("推广服务商(S2)pid").optional()
}