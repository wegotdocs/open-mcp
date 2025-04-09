export { inputParams } from "./schema/root.js"

export const toolName = `createemployee`
export const toolDescription = `Create Employee | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/employees`
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