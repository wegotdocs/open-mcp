import { z } from "zod"

export const inputParams = {
  "code_status": z.string().describe("本次回传动态码的状态：\t\tSUCCESS: 本次发码成功\t\tFAIL_RETRY: 本次发码失败，且需要支付宝重试（重新通知商户发码）\t\tFAIL_NOT_RETRY: 本次发码失败，且无需支付宝重试（无需重新通知商户发码）").optional(),
  "code_value": z.string().describe("动态码的码值：\t\tcode_status为SUCCESS时必填；\t\t基于此码值生成条形码或二维码用于扫码核销。").optional(),
  "expire_time": z.string().describe("当前动态码的过期（失效）时间：\t\t code_status为SUCCESS时必填。").optional(),
  "time_stamp": z.number().int().describe("商户回传动态码的时间戳 (单位秒)。\t\t\t\t即商户调接口回传动态码时刻对应的long类型时间戳，用于区分不同的发码请求。").optional()
}