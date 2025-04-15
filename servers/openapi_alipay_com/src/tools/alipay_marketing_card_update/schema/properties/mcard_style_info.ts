import { z } from "zod"

export const inputParams = {
  "background_id": z.string().describe("背景图片Id，通过接口（alipay.offline.material.image.upload）上传图片\t\t\t\t图片说明：2M以内，格式：bmp、png、jpeg、jpg、gif；\t\t尺寸不小于1020*643px；\t\t图片不得有圆角，不得拉伸变形").optional(),
  "bg_color": z.string().describe("背景色").optional(),
  "logo_id": z.string().describe("logo的图片ID，通过接口（alipay.offline.material.image.upload）上传图片\t\t\t\t图片说明：1M以内，格式bmp、png、jpeg、jpg、gif；\t\t尺寸不小于500*500px的正方形；\t\t请优先使用商家LOGO；").optional()
}