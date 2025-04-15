export { inputParams } from "./schema/root.js"

export const toolName = `createdocument`
export const toolDescription = `Create Document | Puzzle API`
export const baseUrl = `/rest/v0`
export const path = `/company/:id/transactions/:transactionId/document`
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