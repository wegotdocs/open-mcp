import { z } from "zod"

export const toolName = `firewalls_delete_droplets`
export const toolDescription = `Remove Droplets from a Firewall`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/firewalls/{firewall_id}/droplets`
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
    "firewall_id"
  ],
  "cookie": [],
  "body": [
    "droplet_ids"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "firewall_id": z.string().uuid().describe("A unique ID that can be used to identify and reference a firewall."), "droplet_ids": z.array(z.number().int()).describe("An array containing the IDs of the Droplets to be removed from the firewall.").optional() }).shape