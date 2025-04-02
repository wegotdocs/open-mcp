import { z } from "zod"

export const toolName = `monitoring_get_droplet_autoscale_target_instances`
export const toolDescription = `Get Droplet Autoscale Pool Target Size`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/monitoring/metrics/droplet_autoscale/target_instances`
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
    "autoscale_pool_id",
    "start",
    "end"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool."), "start": z.string().describe("UNIX timestamp to start metric window."), "end": z.string().describe("UNIX timestamp to end metric window.") }).shape