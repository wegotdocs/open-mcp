export { inputParams } from "./schema/root.js"

export const toolName = `get_databases_engines`
export const toolDescription = `List Managed Databases engines`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/databases/engines`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "page",
    "page_size"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}