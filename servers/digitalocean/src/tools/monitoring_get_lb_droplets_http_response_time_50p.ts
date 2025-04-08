import { z } from "zod"

export const toolName = `monitoring_get_lb_droplets_http_response_time_50p`
export const toolDescription = `Get Load Balancer Droplets 50th Percentile HTTP Response Time Metrics`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/monitoring/metrics/load_balancer/droplets_http_response_time_50p`
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
  "query": [
    "lb_id",
    "start",
    "end"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "lb_id": z.string().describe("A unique identifier for a load balancer."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}