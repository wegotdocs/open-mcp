export { inputParams } from "./schema/root.js"

export const toolName = `createvendorapi`
export const toolDescription = `Create Vendor | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/vendor`
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