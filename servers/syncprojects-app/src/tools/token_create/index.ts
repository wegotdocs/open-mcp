export { inputParams } from "./schema/root.js"

export const toolName = `token_create`
export const toolDescription = `Takes a set of user credentials and returns an access and refresh JSON web
token pair to prove the authentication of those credentials.`
export const baseUrl = `https://www.syncprojects.app/api/v1/`
export const path = `/api/v1/token/`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "email",
    "password",
    "access",
    "refresh"
  ]
}
export const flatMap = {}