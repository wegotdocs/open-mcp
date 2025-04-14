import { z } from "zod"

export const inputParams = {
  "box_desc": z.string().describe("品牌介绍，5-15个中文字符。\t小程序直达不支持设置此项").optional(),
  "brand_id": z.string().describe("品牌id，参考<a href=\"https://opendocs.alipay.com/rules/029uy4\"> 品牌认证说明 </a>").optional(),
  "business_benefit_switch": z.boolean().describe("可通过配置来开启商圈权益模块，关闭后搜索直达不展示商圈权益模块").optional(),
  "business_district_ids": z.array(z.string()).describe("小程序已关联商圈时，可添加商圈id（目前仅对品牌直达开放，小程序直达暂未开放）").optional(),
  "custom_keywords": z.array(z.string()).describe("自定义触发词，最多可配置10个，限1-8个中文字符。\t小程序直达不支持设置此项").optional(),
  "image_id": z.string().describe("氛围图片id，调用 <a href=\"https://opendocs.alipay.com/mini/03hvl1?ref=api\">支付宝文件上传接口</a> 上传图片获取图片id(bizCode：search_box_atmosphere)。 <a href=\"https://opendocs.alipay.com/b/03al6f\">图片规范</a> \t小程序直达不支持设置此项。").optional(),
  "image_name": z.string().describe("氛围图片名。\t小程序直达不支持设置此项").optional(),
  "merchant_id": z.string().describe("商户id，代运营模式下传入。代运营模式，需要服务商已获得商家\"运营支付宝小程序\"授权。").optional(),
  "related_accounts": z.array(z.object({ "app_name": z.string().describe("应用名称").optional(), "app_type": z.string().describe("应用类型，TINY_APP-小程序/PUBLIC_APP-生活号").optional(), "relate_appid": z.string().describe("应用ID").optional() })).describe("关联账号信息，1-3个。 内部字段均需设置。当为品牌直达时，数组中的第1个账号会被设置为\"账号1\"，也就是将作为搜索直达专区头部的跳转地址").optional(),
  "service_infos": z.array(z.object({ "service_category_code": z.string().describe("服务类目编码").optional(), "service_category_name": z.string().describe("服务类目名称").optional(), "service_code": z.string().describe("服务编码").optional(), "service_name": z.string().describe("服务名称").optional() })).describe("\"服务信息，服务必须审核通过才能申请搜索直达。品牌直达最多可配置同一品牌认证下的小程序4个，小程序直达最多可配置2个。 内部字段均需设置。\"").optional(),
  "target_appid": z.string().describe("小程序id，小程序直达时必传，需要和申请的商户主体保持一致，且符合<a href=\"https://opendocs.alipay.com/b/03al6e\"> 准入类目 </a>").optional()
}