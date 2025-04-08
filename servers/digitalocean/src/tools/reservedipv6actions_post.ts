import { z } from "zod"

export const toolName = `reservedipv6actions_post`
export const toolDescription = `[Public Preview] Initiate a Reserved IPv6 Action`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/reserved_ipv6/{reserved_ipv6}/actions`
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
    "reserved_ipv6"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "reserved_ipv6": z.string().ip({ version: "v6" }).describe("A reserved IPv6 address.")
}