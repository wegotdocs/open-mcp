import { z } from "zod"

export const inputParams = {
  "app_version": z.string().describe("商家小程序版本号，需为审核通过状态的小程序版本。").optional(),
  "bundle_id": z.string().describe("小程序客户端类型，默认为支付宝端。常见支持如下客户端：\tcom.alipay.alipaywallet：支付宝端；\tcom.alibaba.android.rimet：DINGDING端；\tcom.amap.app：高德端；\tcom.alibaba.ailabs.genie.webapps：天猫精灵端；\tcom.alipay.iot.xpaas：支付宝IoT端。\t如需更多端投放，请联系业务BD。").optional(),
  "gray_strategy": z.string().describe("小程序灰度策略值").optional()
}