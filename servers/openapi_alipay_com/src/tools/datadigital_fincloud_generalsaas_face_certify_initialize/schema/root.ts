import { z } from "zod"

export const inputParams = {
  "biz_code": z.string().describe("H5人脸核身场景码。入参支持的场景码。").optional(),
  "face_contrast_picture": z.string().describe("自定义人脸比对图片的base64编码格式的string字符串").optional(),
  "identity_param": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `identity_param` to the tool, first call the tool `expandSchema` with \"/properties/identity_param\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "merchant_config": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `merchant_config` to the tool, first call the tool `expandSchema` with \"/properties/merchant_config\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "outer_order_no": z.string().describe("商户请求的唯一标识，商户要保证其唯一性，值为32位长度的字母数字组合。建议：前面几位字符是商户自定义的简称，中间可以使用一段时间，后段可以使用一个随机或递增序列").optional()
}