import { z } from "zod";
export const toolName = `updatedevicecellulargatewaylan`;
export const toolDescription = `Update the LAN Settings for a single MG.`;
export const baseUrl = `https://api.meraki.com/api/v1`;
export const path = `/devices/{serial}/cellularGateway/lan`;
export const method = `put`;
export const security = [
    {
        "key": "X-Cisco-Meraki-API-Key",
        "value": "<mcp-env-var>X_CISCO_MERAKI_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_CISCO_MERAKI_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "X-Cisco-Meraki-API-Key"
    }
];
export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "body": z.object({ "fixedIpAssignments": z.array(z.object({ "ip": z.string().describe("The IP address you want to assign to a specific server or device"), "mac": z.string().describe("The MAC address of the server or device that hosts the internal resource that you wish to receive the specified IP address"), "name": z.string().describe("A descriptive name of the assignment").optional() })).describe("list of all fixed IP assignments for a single MG").optional(), "reservedIpRanges": z.array(z.object({ "comment": z.string().describe("Comment explaining the reserved IP range"), "end": z.string().describe("Ending IP included in the reserved range of IPs"), "start": z.string().describe("Starting IP included in the reserved range of IPs") })).describe("list of all reserved IP ranges for a single MG").optional() }).optional() }).shape;
