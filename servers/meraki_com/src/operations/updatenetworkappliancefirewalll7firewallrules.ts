import { z } from "zod"

export const toolName = `updatenetworkappliancefirewalll7firewallrules`
export const toolDescription = `Update the MX L7 firewall rules for an MX network`
export const baseUrl = `https://api.meraki.com/api/v1`
export const path = `/networks/{networkId}/appliance/firewall/l7FirewallRules`
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

export const inputParams = z.object({ "path": z.object({ "networkId": z.string() }).optional(), "body": z.object({ "rules": z.array(z.object({ "policy": z.literal("deny").describe("'Deny' traffic specified by this rule").optional(), "type": z.enum(["application","applicationCategory","host","ipRange","port"]).describe("Type of the L7 rule. One of: 'application', 'applicationCategory', 'host', 'port', 'ipRange'").optional(), "value": z.string().describe("The 'value' of what you want to block. Format of 'value' varies depending on type of the rule. The application categories and application ids can be retrieved from the the 'MX L7 application categories' endpoint. The countries follow the two-letter ISO 3166-1 alpha-2 format.").optional() })).describe("An ordered array of the MX L7 firewall rules").optional() }).optional() }).shape