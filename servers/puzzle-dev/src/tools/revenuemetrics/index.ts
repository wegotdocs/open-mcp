export { inputParams } from "./schema/root.js"

export const toolName = `revenuemetrics`
export const toolDescription = `Get Revenue Metrics | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/metrics/revenue`
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