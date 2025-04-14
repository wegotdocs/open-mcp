import { z } from "zod"

export const inputParams = {
  "ext_params": z.string().describe("扩展参数信息；\t\t格式为key-value键值对；\t\t支付宝POST请求指定url时，除BizCardNo等固定参数外，将带上ext_params中配置的所有key-value参数。").optional(),
  "url": z.string().describe("商户接收发码通知的地址链接；\t\t只支持https地址；\t\t用户打开会员卡时，支付宝提交POST请求此url地址，通知商户发码。").optional()
}