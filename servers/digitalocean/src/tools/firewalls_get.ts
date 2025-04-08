import { z } from "zod"

export const toolName = `firewalls_get`
export const toolDescription = `Retrieve an Existing Firewall`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/firewalls/{firewall_id}`
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
    "firewall_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "firewall_id": z.string().uuid().describe("A unique ID that can be used to identify and reference a firewall.")
}