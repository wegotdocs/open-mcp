export { inputParams } from "./schema/root.js"

export const toolName = `get_kernel`
export const toolDescription = `Get a kernel`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/linode/kernels/{kernelId}`
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