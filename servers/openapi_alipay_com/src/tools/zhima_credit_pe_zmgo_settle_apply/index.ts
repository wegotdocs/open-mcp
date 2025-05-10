export { inputParams } from "./schema/root.js"

export const toolName = `zhima_credit_pe_zmgo_settle_apply`
export const toolDescription = `芝麻GO结算申请`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zhima/credit/pe/zmgo/settle/apply`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "action_type",
    "agreement_id",
    "alipay_open_id",
    "alipay_user_id",
    "out_request_no",
    "partner_id",
    "pay_amount",
    "settle_extend_params",
    "total_discount_amount",
    "total_real_pay_amount",
    "total_task_count",
    "withhold_plan_no"
  ]
}
export const flatMap = {}