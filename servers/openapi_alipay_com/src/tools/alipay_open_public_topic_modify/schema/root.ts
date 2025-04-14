import { z } from "zod"

export const inputParams = {
  "img_url": z.string().describe("营销位图片url, 尺寸为996*450，最大不超过5M，支持格式:.jpg、.png ，请先调用<a href=\"https://docs.open.alipay.com/api_3/alipay.offline.material.image.upload\"> 图片上传接口</a>获得图片url。营销位需要展示头图时，必须填写该参数。").optional(),
  "link_type": z.string().describe("跳转类型，网页:HTTP、小程序:APP，不传默认HTTP").optional(),
  "link_url": z.string().describe("营销位跳转地址，点击营销位头图跳到的链接url。营销位需要展示头图时，必须填写该参数。").optional(),
  "sub_title": z.string().describe("营销位描述。营销位需要展示头图时，必须填写该参数").optional(),
  "title": z.string().describe("营销位名称").optional(),
  "topic_id": z.string().describe("营销位id").optional(),
  "topic_items": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `topic_items` to the tool, first call the tool `expandSchema` with \"/properties/topic_items\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}