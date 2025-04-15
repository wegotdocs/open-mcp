export { inputParams } from "./schema/root.js"

export const toolName = `balances`
export const toolDescription = `Get Financial Account Balances | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/accounts/balances`
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