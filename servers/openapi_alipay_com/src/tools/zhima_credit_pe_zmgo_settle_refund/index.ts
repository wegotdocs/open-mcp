export { inputParams } from "./schema/root.js"

export const toolName = `zhima_credit_pe_zmgo_settle_refund`
export const toolDescription = `芝麻GO结算退款接口`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/credit/pe/zmgo/settle/refund`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "agreement_id",
    "alipay_open_id",
    "alipay_user_id",
    "memo",
    "out_request_no",
    "partner_id",
    "refund_amount",
    "refund_type",
    "withhold_plan_no"
  ]
}
export const flatMap = {}