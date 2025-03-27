import { z } from "zod"

export const toolName = `ipblocklistdownload`
export const toolDescription = `IP Blocklist Download`
export const baseUrl = `https://neutrinoapi.net`
export const path = `/ip-blocklist-download`
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

export const inputParams = z.object({ "query": z.object({ "format": z.string().describe("The data format. Can be either CSV or TXT"), "include-vpn": z.boolean().describe("Include public VPN provider addresses, this option is only available for Tier 3 or higher accounts. Adds any IPs which are solely listed as VPN providers, IPs that are listed on multiple sensors will still be included without enabling this option. <br><b>WARNING</b>: This adds at least an additional 8 million IP addresses to the download if not using CIDR notation"), "cidr": z.boolean().describe("Output IPs using CIDR notation. This option should be preferred but is off by default for backwards compatibility"), "ip6": z.boolean().describe("Output the IPv6 version of the blocklist, the default is to output IPv4 only. Note that this option enables CIDR notation too as this is the only notation currently supported for IPv6") }).optional() }).shape