export { inputParams } from "./schema/root.js"

export const toolName = `list_requests_route_requests_get`
export const toolDescription = `List Requests Route`
export const baseUrl = `https://engineapi.moonstream.to/metatx`
export const path = `/requests`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "contract_id",
    "contract_address",
    "caller",
    "limit",
    "offset",
    "show_expired",
    "live_after"
  ],
  "header": [
    "authorization"
  ],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}