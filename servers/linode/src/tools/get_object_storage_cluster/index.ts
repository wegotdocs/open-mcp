export { inputParams } from "./schema/root.js"

export const toolName = `get_object_storage_cluster`
export const toolDescription = `Get a cluster`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/object-storage/clusters/{clusterId}`
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