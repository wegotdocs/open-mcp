import { z } from "zod"

export const toolName = `monitoring_get_dropletload15metrics`
export const toolDescription = `Get Droplet Load15 Metrics`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/monitoring/metrics/droplet/load_15`
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
    "host_id",
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
  "host_id": z.string().describe("The droplet ID."),
  "start": z.string().describe("UNIX timestamp to start metric window."),
  "end": z.string().describe("UNIX timestamp to end metric window.")
}