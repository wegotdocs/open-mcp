export { inputParams } from "./schema/root.js"

export const toolName = `createlocation`
export const toolDescription = `Create Location | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/locations`
export const method = `post`
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