import { z } from "zod"

export const toolName = `droplets_get`
export const toolDescription = `Retrieve an Existing Droplet`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/droplets/{droplet_id}`
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
    "droplet_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance.")
}