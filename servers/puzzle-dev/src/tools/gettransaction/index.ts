export { inputParams } from "./schema/root.js"

export const toolName = `gettransaction`
export const toolDescription = `Get Transaction | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/transactions/:transactionId`
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