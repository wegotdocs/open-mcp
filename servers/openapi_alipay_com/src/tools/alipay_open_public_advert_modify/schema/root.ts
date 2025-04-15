import { z } from "zod"

export const inputParams = {
  "advert_id": z.string().describe("广告位id，通过<a href=\"https://opendocs.alipay.com/apis/api_6/alipay.open.public.advert.create\">alipay.open.public.advert.create</a>(生活号广告位添加接口)添加广告位获取。").optional(),
  "advert_items": z.array(z.object({ "img_url": z.string().describe("广告图片url, 尺寸为996*240，最大不超过5M，支持格式:.jpg、.png ，请先调用<a href=\"https://docs.open.alipay.com/api_3/alipay.offline.material.image.upload\"> 图片上传接口</a>获得图片url").optional(), "link_type": z.string().describe("跳转类型，网页:HTTP、小程序:APP，不传默认HTTP").optional(), "link_url": z.string().describe("跳转链接，点击广告图片跳到的链接url").optional(), "name": z.string().describe("广告帧名称，可选").optional() })).describe("广告位轮播内容列表。数量限制：大于1个，小于5个。广告位轮播内容顺序：与接口传入的顺序排列一致。").optional()
}