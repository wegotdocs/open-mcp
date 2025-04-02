import { z } from "zod"

export const toolName = `monitoring_get_dropletbandwidthmetrics`
export const toolDescription = `Get Droplet Bandwidth Metrics`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/monitoring/metrics/droplet/bandwidth`
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
    "interface",
    "direction",
    "start",
    "end"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "host_id": z.string().describe("The droplet ID."), "interface": z.enum(["private","public"]).describe("The network interface."), "direction": z.enum(["inbound","outbound"]).describe("The traffic direction."), "start": z.string().describe("UNIX timestamp to start metric window."), "end": z.string().describe("UNIX timestamp to end metric window.") }).shape