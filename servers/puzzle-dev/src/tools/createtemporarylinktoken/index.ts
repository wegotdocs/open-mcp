export { inputParams } from "./schema/root.js"

export const toolName = `createtemporarylinktoken`
export const toolDescription = `Fetch a Link Token | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/linkToken`
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