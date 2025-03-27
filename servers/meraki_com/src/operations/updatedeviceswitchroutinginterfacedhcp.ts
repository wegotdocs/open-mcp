import { z } from "zod"

export const toolName = `updatedeviceswitchroutinginterfacedhcp`
export const toolDescription = `Update a layer 3 interface DHCP configuration for a switch`
export const baseUrl = `https://api.meraki.com/api/v1`
export const path = `/devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp`
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

export const inputParams = z.object({ "path": z.object({ "serial": z.string(), "interfaceId": z.string() }).optional(), "body": z.object({ "bootFileName": z.string().describe("The PXE boot server filename for the DHCP server running on the switch interface").optional(), "bootNextServer": z.string().describe("The PXE boot server IP for the DHCP server running on the switch interface").optional(), "bootOptionsEnabled": z.boolean().describe("Enable DHCP boot options to provide PXE boot options configs for the dhcp server running on the switch interface").optional(), "dhcpLeaseTime": z.enum(["1 day","1 hour","1 week","12 hours","30 minutes","4 hours"]).describe("The DHCP lease time config for the dhcp server running on switch interface ('30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week')").optional(), "dhcpMode": z.enum(["dhcpDisabled","dhcpRelay","dhcpServer"]).describe("The DHCP mode options for the switch interface ('dhcpDisabled', 'dhcpRelay' or 'dhcpServer')").optional(), "dhcpOptions": z.array(z.object({ "code": z.string().describe("The code for DHCP option which should be from 2 to 254"), "type": z.enum(["hex","integer","ip","text"]).describe("The type of the DHCP option which should be one of ('text', 'ip', 'integer' or 'hex')"), "value": z.string().describe("The value of the DHCP option") })).describe("Array of DHCP options consisting of code, type and value for the DHCP server running on the switch interface").optional(), "dhcpRelayServerIps": z.array(z.string()).describe("The DHCP relay server IPs to which DHCP packets would get relayed for the switch interface").optional(), "dnsCustomNameservers": z.array(z.string()).describe("The DHCP name server IPs when DHCP name server option is 'custom'").optional(), "dnsNameserversOption": z.enum(["custom","googlePublicDns","openDns"]).describe("The DHCP name server option for the dhcp server running on the switch interface ('googlePublicDns', 'openDns' or 'custom')").optional(), "fixedIpAssignments": z.array(z.object({ "ip": z.string().describe("The IP address of the client which has fixed IP address assigned to it"), "mac": z.string().describe("The MAC address of the client which has fixed IP address"), "name": z.string().describe("The name of the client which has fixed IP address") })).describe("Array of DHCP fixed IP assignments for the DHCP server running on the switch interface").optional(), "reservedIpRanges": z.array(z.object({ "comment": z.string().describe("The comment for the reserved IP range").optional(), "end": z.string().describe("The ending IP address of the reserved IP range"), "start": z.string().describe("The starting IP address of the reserved IP range") })).describe("Array of DHCP reserved IP assignments for the DHCP server running on the switch interface").optional() }).optional() }).shape