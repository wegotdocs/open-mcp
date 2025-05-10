export { inputParams } from "./schema/root.js"

export const toolName = `get_kernels`
export const toolDescription = `List kernels`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/linode/kernels`
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