import { z } from "zod"

export const toolName = `floatingipsaction_list`
export const toolDescription = `List All Actions for a Floating IP`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/floating_ips/{floating_ip}/actions`
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
    "floating_ip"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "floating_ip": z.string().ip({ version: "v4" }).describe("A floating IP address.")
}