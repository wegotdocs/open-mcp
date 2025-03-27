import { z } from "zod";
export const toolName = `updatenetworkapplianceconnectivitymonitoringdestinations`;
export const toolDescription = `Update the connectivity testing destinations for an MX network`;
export const baseUrl = `https://api.meraki.com/api/v1`;
export const path = `/networks/{networkId}/appliance/connectivityMonitoringDestinations`;
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
export const inputParams = z.object({ "path": z.object({ "networkId": z.string() }).optional(), "body": z.object({ "destinations": z.array(z.object({ "default": z.boolean().describe("Boolean indicating whether this is the default testing destination (true) or not (false). Defaults to false. Only one default is allowed").optional(), "description": z.string().describe("Description of the testing destination. Optional, defaults to null").optional(), "ip": z.string().describe("The IP address to test connectivity with") })).describe("The list of connectivity monitoring destinations").optional() }).optional() }).shape;
