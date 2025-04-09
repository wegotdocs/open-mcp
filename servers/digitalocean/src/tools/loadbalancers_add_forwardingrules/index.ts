export { inputParams } from "./schema/root.js"

export const toolName = `loadbalancers_add_forwardingrules`
export const toolDescription = `Add Forwarding Rules to a Load Balancer`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/load_balancers/{lb_id}/forwarding_rules`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "lb_id"
  ],
  "cookie": [],
  "body": [
    "forwarding_rules"
  ]
}
export const flatMap = {}