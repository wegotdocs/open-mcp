import { z } from "zod"

export const inputParams = {
  "box_desc": z.string().describe("品牌介绍，5-15个中文字符。当修改品牌介绍模块(module_type=BOX_EXCLUSIVE_BASE)时传入。\t小程序直达时不支持设置").optional(),
  "box_id": z.string().describe("搜索直达配置id").optional(),
  "brand_id": z.string().describe("品牌id，参考<a href=\"https://opendocs.alipay.com/rules/029uy4\"> 品牌认证说明 </a>").optional(),
  "business_benefit_switch": z.boolean().describe("可通过配置来开启商圈权益模块，关闭后搜索直达不展示商圈权益模块").optional(),
  "business_district_ids": z.array(z.string()).describe("小程序已关联商圈时，可添加商圈id（目前仅对品牌直达开放，小程序直达暂未开放）").optional(),
  "custom_keywords": z.string().describe("1024").optional(),
  "image_id": z.string().describe("氛围图片id，调用 <a href=\"https://opendocs.alipay.com/mini/03hvl1?ref=api\">支付宝文件上传接口</a> 上传图片获取图片id(bizCode：search_box_atmosphere)。 <a href=\"https://opendocs.alipay.com/b/03al6f\">图片规范</a> \t小程序直达不支持设置此项。").optional(),
  "image_name": z.string().describe("氛围图片名，当修改氛围图模块(module_type=BOX_ATMOSPHERE_IMAGE)时传入。\t小程序直达不支持设置").optional(),
  "merchant_id": z.string().describe("商户id，代运营模式下传入。代运营模式，需要服务商已获得商家\"运营支付宝小程序\"授权。").optional(),
  "module_id": z.string().describe("搜索直达模块配置id，新增模块时可不传，更新模块时必传。从alipay.open.search.box.query详情接口查询可获取已存在模块的配置id").optional(),
  "module_type": z.string().describe("搜索直达模块类型，参考<a href=\"https://opendocs.alipay.com/mini/03fjba#%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E\"> 搜索直达模块说明 </a>。").optional(),
  "related_accounts": z.array(z.object({ "app_name": z.string().describe("应用名称").optional(), "app_type": z.string().describe("应用类型，TINY_APP-小程序/PUBLIC_APP-生活号").optional(), "relate_appid": z.string().describe("应用ID").optional() })).describe("\"关联账号信息，可配置1-2个。传入账号需归属于商家主体。品牌直达修改官方账号(module_type=BOX_EXCLUSIVE_ACCOUNTS)时传入，小程序直达修改常用服务模块时也需传值。 当为品牌直达时，数组中的第1个账号会被设置为\"账号1\"，也就是将作为搜索直达专区头部的跳转地址。\"").optional(),
  "service_infos": z.array(z.object({ "service_category_code": z.string().describe("服务类目编码").optional(), "service_category_name": z.string().describe("服务类目名称").optional(), "service_code": z.string().describe("服务编码").optional(), "service_name": z.string().describe("服务名称").optional() })).describe("服务信息，服务必须审核通过才能申请搜索直达，可配置1-4个。当修改常用服务模块(module_type=BOX_EXCLUSIVE_FUNCTIONS)时传入").optional(),
  "target_appid": z.string().describe("小程序id，小程序直达时必传，需要和申请的商户主体保持一致，且符合<a href=\"https://opendocs.alipay.com/b/03al6e\"> 准入类目 </a>").optional()
}