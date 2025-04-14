import { z } from "zod"

export const inputParams = {
  "app_version": z.string().describe("商家小程序版本号。版本号必须满足 x.y.z, 且均为数字。要求版本号比商户之前最新的版本号高。").optional(),
  "bundle_id": z.string().describe("小程序客户端类型，默认为支付宝端。常见支持如下客户端：\tcom.alipay.alipaywallet：支付宝端；\tcom.alibaba.android.rimet：DINGDING端；\tcom.amap.app：高德端；\tcom.alibaba.ailabs.genie.webapps：天猫精灵端；\tcom.alipay.iot.xpaas：支付宝IoT端。\t如需更多端投放，请联系业务BD。").optional(),
  "ext": z.string().describe("自定义参数，用于配置商家小程序的个性化内容，具体使用方法参见示例代码。\t在小程序中可以通过 <a href=\"https://opendocs.alipay.com/mini/api/getExtConfig\">my.getExtConfig()</a> 或 <a href=\"https://opendocs.alipay.com/mini/api/getExtConfigSync\">my.getExtConfigSync()</a> 获取 ext 参数内容（建议支付宝版本 > 10.1.38，并使用 <a href=\"https://opendocs.alipay.com/mini/api/can-i-use\">my.canIUse</a> 做兼容处理）。").optional(),
  "template_id": z.string().describe("小程序模板 APPID。").optional(),
  "template_version": z.string().describe("小程序模板版本号。版本号必须满足 x.y.z, 且均为数字。不传默认使用最新在架（已上架）模板版本。").optional()
}