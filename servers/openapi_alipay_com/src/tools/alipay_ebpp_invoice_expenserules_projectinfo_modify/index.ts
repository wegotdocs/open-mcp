export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_expenserules_projectinfo_modify`
export const toolDescription = `修改项目基础信息`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/expenserules/projectinfo/modify`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "account_id",
    "agreement_no",
    "effective_end_date",
    "effective_start_date",
    "project_id",
    "project_name"
  ]
}
export const flatMap = {}