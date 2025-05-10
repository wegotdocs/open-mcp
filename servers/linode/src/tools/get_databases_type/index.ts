export { inputParams } from "./schema/root.js"

export const toolName = `get_databases_type`
export const toolDescription = `Get a Managed Databases type`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/databases/types/{typeId}`
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