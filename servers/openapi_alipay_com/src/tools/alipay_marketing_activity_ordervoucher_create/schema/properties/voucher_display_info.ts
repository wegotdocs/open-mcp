import { z } from "zod"

export const inputParams = {
  "brand_logo": z.string().describe("商家logo。需要通过\talipay.marketing.material.image.upload接口上传图片，指定file_key为PROMO_BRAND_LOGO，返回的resource_id即为该参数的值").optional(),
  "brand_name": z.string().describe("商户品牌名称。如果不设置品牌名称，则默认使用支付宝商家系统中维护的商家别名。如果没有维护商家别名，则使用默认名称：商家优惠。用户领取优惠券后，品牌名称会对用户进行展示").optional(),
  "customer_service_mobile": z.string().describe("客服电话").optional(),
  "customer_service_url": z.string().describe("客服链接").optional(),
  "voucher_comment": z.string().describe("券补充说明，该字段为可运营字段，可描述商品特色\t会展示在用户支付宝卡包券详情页").optional(),
  "voucher_description": z.string().describe("券详细使用说明。").optional(),
  "voucher_detail_images": z.array(z.string()).describe("券详细图列表，会展示在用户支付宝卡包券详情页。需要通过\talipay.marketing.material.image.upload接口上传图片，指定file_key为PROMO_VOUCHER_DETAIL_IMAGE\t,接口返回的resource_id即为该参数的值。上传图片尺寸600*600，支持格式：png、jpg、jpeg、bmp，大小不超过2MB。").optional(),
  "voucher_image": z.string().describe("券详情页封面图，会展示在用户支付宝卡包券详情页。需要通过\talipay.marketing.material.image.upload接口上传图片，指定file_key为PROMO_VOUCHER_IMAGE，接口返回的resource_id即为该参数的值").optional()
}