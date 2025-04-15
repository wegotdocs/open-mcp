export { inputParams } from "./schema/root.js"

export const toolName = `vendorspendingreportapi`
export const toolDescription = `Get Vendor Spending Report | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/vendor-spending-report`
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