export { inputParams } from "./schema/root.js"

export const toolName = `getuserbyname`
export const toolDescription = `Get user by user name.`
export const baseUrl = `https://petstore3.swagger.io/api/v3`
export const path = `/user/{username}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "username"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}