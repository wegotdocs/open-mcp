import { z } from "zod"

export const inputParams = {
  "author_id": z.string().describe("媒体唤起时传入的支付宝id").optional(),
  "mini_app_id": z.string().describe("支付宝appid，代表一个小程序的唯一标识").optional(),
  "params": z.string().describe("媒体唤起时提供的额外参数值列表，这里可能有多个值，打平以后拼入。即url_decode(authcbparams)").optional(),
  "site_id": z.string().describe("回调的siteid 淘宝账号唯一").optional(),
  "source": z.string().describe("媒体来源，标识调用方").optional(),
  "taobao_id": z.string().describe("淘宝id").optional(),
  "taobao_nick": z.string().describe("淘宝昵称").optional()
}