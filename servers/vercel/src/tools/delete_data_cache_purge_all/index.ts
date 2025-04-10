export { inputParams } from "./schema/root.js"

export const toolName = `delete_data_cache_purge_all`
export const toolDescription = ``
export const baseUrl = `https://api.vercel.com`
export const path = `/data-cache/purge-all`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "projectIdOrName"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}