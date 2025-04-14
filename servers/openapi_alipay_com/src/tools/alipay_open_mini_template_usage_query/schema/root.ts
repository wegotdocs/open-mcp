import { z } from "zod"

export const inputParams = {
  "template_id": z.string().describe("小程序模板APPID").optional(),
  "page_num": z.number().int().describe("查询的页数，起始为 1（第一页） 。默认第一页。").optional(),
  "page_size": z.number().int().describe("每页的数量，最多查询50个，默认查询10个").optional(),
  "template_version": z.string().describe("模板小程序的版本号").optional(),
  "bundle_id": z.string().describe("小程序客户端类型，默认为支付宝端。常见支持如下客户端：\tcom.alipay.alipaywallet：支付宝端；\tcom.alibaba.android.rimet：DINGDING端；\tcom.amap.app：高德端；\tcom.alibaba.ailabs.genie.webapps：天猫精灵端；\tcom.alipay.iot.xpaas：支付宝IoT端。\t如需更多端投放，请联系业务BD。").optional()
}