export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_pdeduct_bill_pay_status`
export const toolDescription = `缴费直连代扣订单支付状态查询`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/pdeduct/bill/pay/status`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "agreement_id",
    "open_id",
    "out_order_no"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}