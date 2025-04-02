import { z } from "zod"

export const toolName = `floatingipsaction_post`
export const toolDescription = `Initiate a Floating IP Action`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/floating_ips/{floating_ip}/actions`
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
    "floating_ip"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "floating_ip": z.string().ip({ version: "v4" }).describe("A floating IP address.") }).shape