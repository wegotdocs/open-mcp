export { inputParams } from "./schema/root.js"

export const toolName = `updatetransaction`
export const toolDescription = `Update Transaction | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/transactions/:transactionId`
export const method = `patch`
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