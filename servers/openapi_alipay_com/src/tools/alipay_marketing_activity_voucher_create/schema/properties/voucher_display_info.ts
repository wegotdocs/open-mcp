import { z } from "zod"

export const inputParams = {
  "brand_name": z.string().describe("商户品牌名称。").optional(),
  "customer_service_mobile": z.string().describe("商家客服电话，会展示在支付宝卡包券详情页。").optional(),
  "voucher_description": z.string().describe("用于说明详细的活动规则，会展示在支付宝卡包券详情页。").optional(),
  "voucher_detail_images": z.array(z.string()).describe("券详细图列表，会展示在用户支付宝卡包券详情页 需要通过 alipay.marketing.material.image.upload接口上传图片，指定file_key为PROMO_VOUCHER_DETAIL_IMAGE ,接口返回的resource_id即为该参数的值 上传图片尺寸600*600，支持格式：png、jpg、jpeg、bmp，大小不超过2MB 限制 1.voucher_image填入，该值才能填入； 2.最多3张；").optional(),
  "voucher_image": z.string().describe("券详情页封面图，会展示在用户支付宝卡包券详情页 需要通过  alipay.marketing.material.image.upload接口上传图片，指定file_key为PROMO_VOUCHER_IMAGE，接口返回的resource_id即为该参数的值  限制: 该字段在兑换券场景下必传 上传图片尺寸670*335，支持格式：png、jpg、jpeg、bmp，大小不超过2MB\t限制:\t1.指定可核销商品(available_goods)时必传").optional()
}