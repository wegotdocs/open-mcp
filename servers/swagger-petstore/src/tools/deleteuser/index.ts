export { inputParams } from "./schema/root.js"

export const toolName = `deleteuser`
export const toolDescription = `Delete user resource.`
export const baseUrl = `https://petstore3.swagger.io/api/v3`
export const path = `/user/{username}`
export const method = `delete`
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