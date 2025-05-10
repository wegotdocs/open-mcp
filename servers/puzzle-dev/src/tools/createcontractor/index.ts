export { inputParams } from "./schema/root.js"

export const toolName = `createcontractor`
export const toolDescription = `Create Contractor | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/contractors`
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