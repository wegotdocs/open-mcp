import { z } from "zod"

export const toolName = `loadbalancers_get`
export const toolDescription = `Retrieve an Existing Load Balancer`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/load_balancers/{lb_id}`
export const method = `get`
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