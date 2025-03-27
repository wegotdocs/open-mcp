import { z } from "zod"

export const toolName = `updatedevicemanagementinterface`
export const toolDescription = `Update the management interface settings for a device`
export const baseUrl = `https://api.meraki.com/api/v1`
export const path = `/devices/{serial}/managementInterface`
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

export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "body": z.object({ "wan1": z.object({ "staticDns": z.array(z.string()).describe("Up to two DNS IPs.").optional(), "staticGatewayIp": z.string().describe("The IP of the gateway on the WAN.").optional(), "staticIp": z.string().describe("The IP the device should use on the WAN.").optional(), "staticSubnetMask": z.string().describe("The subnet mask for the WAN.").optional(), "usingStaticIp": z.boolean().describe("Configure the interface to have static IP settings or use DHCP.").optional(), "vlan": z.number().int().describe("The VLAN that management traffic should be tagged with. Applies whether usingStaticIp is true or false.").optional(), "wanEnabled": z.enum(["disabled","enabled","not configured"]).describe("Enable or disable the interface (only for MX devices). Valid values are 'enabled', 'disabled', and 'not configured'.").optional() }).describe("WAN 1 settings").optional(), "wan2": z.object({ "staticDns": z.array(z.string()).describe("Up to two DNS IPs.").optional(), "staticGatewayIp": z.string().describe("The IP of the gateway on the WAN.").optional(), "staticIp": z.string().describe("The IP the device should use on the WAN.").optional(), "staticSubnetMask": z.string().describe("The subnet mask for the WAN.").optional(), "usingStaticIp": z.boolean().describe("Configure the interface to have static IP settings or use DHCP.").optional(), "vlan": z.number().int().describe("The VLAN that management traffic should be tagged with. Applies whether usingStaticIp is true or false.").optional(), "wanEnabled": z.enum(["disabled","enabled","not configured"]).describe("Enable or disable the interface (only for MX devices). Valid values are 'enabled', 'disabled', and 'not configured'.").optional() }).describe("WAN 2 settings (only for MX devices)").optional() }).optional() }).shape