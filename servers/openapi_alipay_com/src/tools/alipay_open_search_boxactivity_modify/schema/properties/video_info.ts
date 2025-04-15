import { z } from "zod"

export const inputParams = {
  "video_btn_text": z.string().describe("视频按钮文案，2-4个汉字").optional(),
  "video_coverimg_id": z.string().describe("视频封面图片id，图片id可以通过调用接口alipay.open.file.upload上传图片，获取图片id。图片规范：https://opendocs.alipay.com/mini/operation/atmospheredesign").optional(),
  "video_sub_title": z.string().describe("视频副标题，2-16个汉字").optional(),
  "video_title": z.string().describe("视频主标题，2-10个汉字").optional()
}