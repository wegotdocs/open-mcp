export { inputParams } from "./schema/root.js"

export const toolName = `createaccountbalance`
export const toolDescription = `Create Account Balance | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/accounts/balances`
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