export { inputParams } from "./schema/root.js"

export const toolName = `getbreeds`
export const toolDescription = `Get a list of breeds`
export const baseUrl = `https://api.example.com`
export const path = `/breeds`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "limit"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}