import { z } from "zod"

export const inputParams = {
  "background_id": z.string().describe("背景图片Id，通过接口（alipay.offline.material.image.upload）上传图片\t\t\t\t图片说明：2M以内，格式：bmp、png、jpeg、jpg、gif；\t\t尺寸不小于1020*643px；\t\t图片不得有圆角，不得拉伸变形").optional(),
  "banner_img_id": z.string().describe("banner图片id。 通过接口（alipay.offline.material.image.upload）上传图片。").optional(),
  "banner_url": z.string().describe("banner跳转地址。").optional(),
  "bg_color": z.string().describe("字体颜色（非背景色），只影响卡详情中部信息区域字体颜色").optional(),
  "brand_name": z.string().describe("品牌商名称").optional(),
  "card_show_name": z.string().describe("钱包端显示名称").optional(),
  "color": z.string().describe("注意：此字段已废弃。").optional(),
  "column_info_layout": z.string().describe("如果为空则默认为list。").optional(),
  "feature_descriptions": z.array(z.string()).describe("特色信息，用于领卡预览").optional(),
  "front_image_enable": z.boolean().describe("设置是否在卡面展示（个人头像）图片信息，默认不展示；\t\t当前仅用于身份验证信息类型的个人头像图片；\t\t图片id随创建卡/更新卡时传入；\t\t详见会员卡产品文档。").optional(),
  "front_text_list_enable": z.boolean().describe("设置是否在卡面展示文案信息，默认不展示；\t\t文案信息分行展示，最多展示4行文案，每行文案分为label和value两部分；\t\t文案实际内容随创建卡/更新卡时传入；\t\t详见会员卡产品说明文档。").optional(),
  "logo_id": z.string().describe("logo的图片ID，通过接口（alipay.offline.material.image.upload）上传图片\t\t\t\t图片说明：1M以内，格式bmp、png、jpeg、jpg、gif；\t\t尺寸不小于500*500px的正方形；\t\t请优先使用商家LOGO；").optional(),
  "slogan": z.string().describe("标语").optional(),
  "slogan_img_id": z.string().describe("标语图片id， 通过接口（alipay.offline.material.image.upload）上传图片").optional()
}