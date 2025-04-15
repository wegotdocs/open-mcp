import { z } from "zod"

export const inputParams = {
  "app_offline_version": z.string().describe("下架版本").optional(),
  "app_online_version": z.string().describe("上架版本").optional(),
  "app_origin": z.string().describe("业务来源").optional(),
  "bundle_id": z.string().describe("一个端的标识，用于区分不同的客户端，每接入一个客户端，都需要向小程序应用中心申请bundelId入驻").optional(),
  "inst_code": z.string().describe("租户code，alipay or taobao").optional(),
  "mini_app_id": z.string().describe("小程序ID").optional()
}