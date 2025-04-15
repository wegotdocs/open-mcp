export { inputParams } from "./schema/root.js"

export const toolName = `getpayroll`
export const toolDescription = `Get Payroll | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/payrolls/:payrollId`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "input"
  ]
}
export const flatMap = {}