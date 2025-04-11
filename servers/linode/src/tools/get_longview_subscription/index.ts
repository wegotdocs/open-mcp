export { inputParams } from "./schema/root.js"

export const toolName = `get_longview_subscription`
export const toolDescription = `Get a Longview subscription`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/longview/subscriptions/{subscriptionId}`
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