export { inputParams } from "./schema/root.js"

export const toolName = `ledgeraccount`
export const toolDescription = `Get Ledger Account | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/ledgerAccounts/:ledgerAccountId`
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