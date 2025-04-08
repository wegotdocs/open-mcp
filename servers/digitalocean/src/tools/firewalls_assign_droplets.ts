import { z } from "zod"

export const toolName = `firewalls_assign_droplets`
export const toolDescription = `Add Droplets to a Firewall`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/firewalls/{firewall_id}/droplets`
export const method = `post`
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
    "firewall_id"
  ],
  "cookie": [],
  "body": [
    "droplet_ids"
  ]
}
export const flatMap = {}

export const inputParams = {
  "firewall_id": z.string().uuid().describe("A unique ID that can be used to identify and reference a firewall."),
  "droplet_ids": z.array(z.number().int()).describe("An array containing the IDs of the Droplets to be assigned to the firewall.").optional()
}