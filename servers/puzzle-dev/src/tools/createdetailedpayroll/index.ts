export { inputParams } from "./schema/root.js"

export const toolName = `createdetailedpayroll`
export const toolDescription = `Create Payroll | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/payrolls`
export const method = `post`
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