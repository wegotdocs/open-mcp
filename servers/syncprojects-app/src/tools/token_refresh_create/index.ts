export { inputParams } from "./schema/root.js"

export const toolName = `token_refresh_create`
export const toolDescription = `Takes a refresh type JSON web token and returns an access type JSON web
token if the refresh token is valid.`
export const baseUrl = `https://www.syncprojects.app/api/v1/`
export const path = `/api/v1/token/refresh/`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "access",
    "refresh"
  ]
}
export const flatMap = {}