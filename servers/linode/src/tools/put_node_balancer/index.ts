export { inputParams } from "./schema/root.js"

export const toolName = `put_node_balancer`
export const toolDescription = `Update a NodeBalancer`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/nodebalancers/{nodeBalancerId}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "client_conn_throttle",
    "created",
    "hostname",
    "id",
    "ipv4",
    "ipv6",
    "label",
    "lke_cluster",
    "region",
    "tags",
    "transfer",
    "type",
    "updated"
  ]
}
export const flatMap = {}