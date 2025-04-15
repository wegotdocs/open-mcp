import { z } from "zod"

export const inputParams = {
  "user_id": z.string().describe("支付宝用户 id").optional(),
  "open_id": z.string().describe("支付宝用户openId").optional(),
  "activity_id": z.string().describe("活动 id").optional(),
  "belong_merchant_id": z.string().describe("券归属商户").optional(),
  "sender_merchant_id": z.string().describe("券发放商户").optional(),
  "voucher_status": z.string().describe("券状态，其中已过期状态可查询6个月内的数据").optional(),
  "page_num": z.number().int().describe("分页查询页码").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "page_size": z.number().int().describe("分页查询单页数据条数").optional()
}