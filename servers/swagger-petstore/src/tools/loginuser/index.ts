export { inputParams } from "./schema/root.js"

export const toolName = `loginuser`
export const toolDescription = `Logs user into the system.`
export const baseUrl = `https://petstore3.swagger.io/api/v3`
export const path = `/user/login`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "username",
    "password"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}