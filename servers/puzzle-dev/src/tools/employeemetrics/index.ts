export { inputParams } from "./schema/root.js"

export const toolName = `employeemetrics`
export const toolDescription = `Get Employee Metrics | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/metrics/employee`
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