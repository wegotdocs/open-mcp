import { z } from "zod";
export const toolName = `rebootdevice`;
export const toolDescription = `Reboot a device`;
export const baseUrl = `https://api.meraki.com/api/v1`;
export const path = `/devices/{serial}/reboot`;
export const method = `post`;
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
export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional() }).shape;
