export { inputParams } from "./schema/root.js"

export const toolName = `benefits`
export const toolDescription = `Get Benefits | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/benefits`
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