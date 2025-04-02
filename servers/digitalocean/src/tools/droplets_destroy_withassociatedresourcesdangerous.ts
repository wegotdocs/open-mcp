import { z } from "zod"

export const toolName = `droplets_destroy_withassociatedresourcesdangerous`
export const toolDescription = `Destroy a Droplet and All of its Associated Resources (Dangerous)`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/droplets/{droplet_id}/destroy_with_associated_resources/dangerous`
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
  "header": [
    "X-Dangerous"
  ],
  "path": [
    "droplet_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "droplet_id": z.number().int().gte(1).describe("A unique identifier for a Droplet instance."), "X-Dangerous": z.boolean().describe("Acknowledge this action will destroy the Droplet and all associated resources and _can not_ be reversed.") }).shape