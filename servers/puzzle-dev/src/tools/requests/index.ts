export { inputParams } from "./schema/root.js"

export const toolName = `requests`
export const toolDescription = `Get Requests | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/requests`
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