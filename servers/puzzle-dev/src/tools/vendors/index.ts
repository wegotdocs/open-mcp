export { inputParams } from "./schema/root.js"

export const toolName = `vendors`
export const toolDescription = `Get Vendors | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/vendors`
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