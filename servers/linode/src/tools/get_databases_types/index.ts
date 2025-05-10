export { inputParams } from "./schema/root.js"

export const toolName = `get_databases_types`
export const toolDescription = `List Managed Databases types`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/databases/types`
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