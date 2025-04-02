import { z } from "zod"

export const toolName = `loadbalancers_update`
export const toolDescription = `Update a Load Balancer`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/load_balancers/{lb_id}`
export const method = `put`
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
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "lb_id": z.string().describe("A unique identifier for a load balancer.") }).shape