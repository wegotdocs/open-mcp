export { inputParams } from "./schema/root.js"

export const toolName = `workerslist`
export const toolDescription = `Get Workers | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/workers`
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