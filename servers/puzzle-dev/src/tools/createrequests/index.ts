export { inputParams } from "./schema/root.js"

export const toolName = `createrequests`
export const toolDescription = `Create Requests | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/requests`
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