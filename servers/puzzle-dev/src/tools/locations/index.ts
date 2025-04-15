export { inputParams } from "./schema/root.js"

export const toolName = `locations`
export const toolDescription = `Get Locations | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/locations`
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