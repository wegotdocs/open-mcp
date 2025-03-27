import { z } from "zod"

export const toolName = `updatedevicecellulargatewayportforwardingrules`
export const toolDescription = `Updates the port forwarding rules for a single MG.`
export const baseUrl = `https://api.meraki.com/api/v1`
export const path = `/devices/{serial}/cellularGateway/portForwardingRules`
export const method = `put`
export const security = [
  {
    "key": "X-Cisco-Meraki-API-Key",
    "value": "<mcp-env-var>X_CISCO_MERAKI_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_CISCO_MERAKI_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "X-Cisco-Meraki-API-Key"
  }
]

export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "body": z.object({ "rules": z.array(z.object({ "access": z.string().describe("`any` or `restricted`. Specify the right to make inbound connections on the specified ports or port ranges. If `restricted`, a list of allowed IPs is mandatory."), "allowedIps": z.array(z.string()).describe("An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges.").optional(), "lanIp": z.string().describe("The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN"), "localPort": z.string().describe("A port or port ranges that will receive the forwarded traffic from the WAN"), "name": z.string().describe("A descriptive name for the rule").optional(), "protocol": z.string().describe("TCP or UDP"), "publicPort": z.string().describe("A port or port ranges that will be forwarded to the host on the LAN") })).describe("An array of port forwarding params").optional() }).optional() }).shape