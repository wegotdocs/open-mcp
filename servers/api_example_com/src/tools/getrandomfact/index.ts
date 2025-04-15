export { inputParams } from "./schema/root.js"

export const toolName = `getrandomfact`
export const toolDescription = `Get Random Fact`
export const baseUrl = `https://api.example.com`
export const path = `/fact`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "max_length"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}