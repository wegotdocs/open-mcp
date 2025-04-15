import { z } from "zod"

export const inputParams = {
  "app_version": z.string().describe("商家小程序版本号，需为审核通过状态或灰度中版本。").optional(),
  "bundle_id": z.string().describe("小程序客户端类型，默认为支付宝端。常见支持如下客户端：\tcom.alipay.alipaywallet：支付宝端；\tcom.alibaba.android.rimet：DINGDING端；\tcom.amap.app：高德端；\tcom.alibaba.ailabs.genie.webapps：天猫精灵端；\tcom.alipay.iot.xpaas：支付宝IoT端。\t如需更多端投放，请联系业务BD。").optional(),
  "downgrade": z.boolean().describe("true - 性能优先； false - 覆盖优先（默认）").optional(),
  "permit_registration_limit_release": z.boolean().describe("如果该字段为true，在首次发版的小程序在备案未完成的情况下，允许小程序上架，但小程序上架后只可以上架可扫码进行使用，但不可被搜索、限制访问人数（50人/每天）、限制公域（无法进行商品、服务、营促销）、限制上架后90天不完成备案自动下架。\t默认为false").optional()
}