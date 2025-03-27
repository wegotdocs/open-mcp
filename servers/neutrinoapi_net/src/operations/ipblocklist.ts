import { z } from "zod"

export const toolName = `ipblocklist`
export const toolDescription = `IP Blocklist`
export const baseUrl = `https://neutrinoapi.net`
export const path = `/ip-blocklist`
export const method = `get`
export const security = [
  {
    "key": "api-key",
    "value": "<mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "apiKey",
    "schemeName": "api-key"
  },
  {
    "key": "user-id",
    "value": "<mcp-env-var>USER_ID</mcp-env-var>",
    "in": "header",
    "envVarName": "USER_ID",
    "schemeType": "apiKey",
    "schemeName": "user-id"
  }
]

export const inputParams = z.object({ "query": z.object({ "ip": z.string().describe("An IPv4 or IPv6 address. Accepts standard IP notation (with or without port number), CIDR notation and IPv6 compressed notation. If multiple IPs are passed using comma-separated values the first non-bogon address on the list will be checked"), "vpn-lookup": z.boolean().describe("Include public VPN provider IP addresses. <br><b>NOTE</b>: For more advanced VPN detection including the ability to identify private and stealth VPNs use the <a href=\"https://www.neutrinoapi.com/api/ip-probe/\">IP Probe API</a>") }).optional() }).shape