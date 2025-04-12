export { inputParams } from "./schema/root.js"

export const toolName = `token_verify_create`
export const toolDescription = `Takes a token and indicates if it is valid.  This view provides no
information about a token's fitness for a particular use.`
export const baseUrl = `https://www.syncprojects.app/api/v1/`
export const path = `/api/v1/token/verify/`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "token"
  ]
}
export const flatMap = {}