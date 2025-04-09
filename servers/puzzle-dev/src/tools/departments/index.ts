export { inputParams } from "./schema/root.js"

export const toolName = `departments`
export const toolDescription = `Get Departments | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/departments`
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