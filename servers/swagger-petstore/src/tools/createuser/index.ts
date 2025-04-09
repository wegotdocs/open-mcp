export { inputParams } from "./schema/root.js"

export const toolName = `createuser`
export const toolDescription = `Create user.`
export const baseUrl = `https://petstore3.swagger.io/api/v3`
export const path = `/user`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "id",
    "username",
    "firstName",
    "lastName",
    "email",
    "password",
    "phone",
    "userStatus"
  ]
}
export const flatMap = {}