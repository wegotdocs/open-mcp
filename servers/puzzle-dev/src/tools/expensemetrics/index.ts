export { inputParams } from "./schema/root.js"

export const toolName = `expensemetrics`
export const toolDescription = `Get Expense Metrics | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/metrics/expenses`
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