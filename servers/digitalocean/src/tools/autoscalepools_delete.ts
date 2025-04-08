import { z } from "zod"

export const toolName = `autoscalepools_delete`
export const toolDescription = `Delete autoscale pool`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/droplets/autoscale/{autoscale_pool_id}`
export const method = `delete`
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
    "autoscale_pool_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool.")
}