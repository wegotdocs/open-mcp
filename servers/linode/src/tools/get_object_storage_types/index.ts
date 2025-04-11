export { inputParams } from "./schema/root.js"

export const toolName = `get_object_storage_types`
export const toolDescription = `List Object Storage types`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/object-storage/types`
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