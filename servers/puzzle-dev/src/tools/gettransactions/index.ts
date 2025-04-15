export { inputParams } from "./schema/root.js"

export const toolName = `gettransactions`
export const toolDescription = `Get Transactions | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/transactions`
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