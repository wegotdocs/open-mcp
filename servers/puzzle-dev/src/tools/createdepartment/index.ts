export { inputParams } from "./schema/root.js"

export const toolName = `createdepartment`
export const toolDescription = `Create Department | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/departments`
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