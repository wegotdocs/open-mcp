export { inputParams } from "./schema/root.js"

export const toolName = `get_linode_types`
export const toolDescription = `List types`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/linode/types`
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