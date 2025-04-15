import { z } from "zod"

export const inputParams = {
  "allow_more_uploads": z.boolean().describe("允许上传更多附件。开启后，除了“附件列表”中指定的内容，签署人可自由上传之多10张图片。默认值为false").optional(),
  "description": z.string().describe("描述").optional(),
  "details": z.array(z.object({ "code": z.string().describe("英文描述（collectAttachement值为true时必填）\t以下是系统固定code,对上传的图片做相应的校验。\t身份证校验情况：\t身份证正面照片：ESIGN_IDCARD\t身份证背面照片：ESIGN_BACK_IDCARD").optional(), "description": z.string().describe("请上传手机正面照").optional(), "order": z.number().int().describe("顺序（collectAttachement值为true时必填）").optional() })).describe("附件列表").optional(),
  "title": z.string().describe("附件标题（collect_attachement值为true时必填").optional()
}