export { inputParams } from "./schema/root.js"

export const toolName = `createbenefit`
export const toolDescription = `Create Benefit | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/benefits`
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