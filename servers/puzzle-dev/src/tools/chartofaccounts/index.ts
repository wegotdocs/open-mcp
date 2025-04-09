export { inputParams } from "./schema/root.js"

export const toolName = `chartofaccounts`
export const toolDescription = `Get Chart of Accounts | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/chartOfAccounts`
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