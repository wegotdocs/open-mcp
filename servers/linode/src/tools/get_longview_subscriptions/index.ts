export { inputParams } from "./schema/root.js"

export const toolName = `get_longview_subscriptions`
export const toolDescription = `List Longview subscriptions`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/longview/subscriptions`
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