export { inputParams } from "./schema/root.js"

export const toolName = `get_object_storage_clusters`
export const toolDescription = `List clusters`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/object-storage/clusters`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}