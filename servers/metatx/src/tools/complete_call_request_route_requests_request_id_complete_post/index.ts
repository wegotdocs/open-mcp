export { inputParams } from "./schema/root.js"

export const toolName = `complete_call_request_route_requests_request_id_complete_post`
export const toolDescription = `Complete Call Request Route`
export const baseUrl = `https://engineapi.moonstream.to/metatx`
export const path = `/requests/{request_id}/complete`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [
    "authorization"
  ],
  "path": [
    "request_id"
  ],
  "cookie": [],
  "body": [
    "tx_hash"
  ]
}
export const flatMap = {}