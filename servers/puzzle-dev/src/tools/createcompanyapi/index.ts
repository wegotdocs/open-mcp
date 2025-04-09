export { inputParams } from "./schema/root.js"

export const toolName = `createcompanyapi`
export const toolDescription = `Initiate Creating a Company | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company`
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