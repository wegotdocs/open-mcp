export { inputParams } from "./schema/root.js"

export const toolName = `classifications`
export const toolDescription = `Get Classifications | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/classifications`
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