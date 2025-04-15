export { inputParams } from "./schema/root.js"

export const toolName = `getfacts`
export const toolDescription = `Get a list of facts`
export const baseUrl = `https://api.example.com`
export const path = `/facts`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "max_length",
    "limit"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}