import { z } from "zod";
export const toolName = `updatedevicecamerawirelessprofiles`;
export const toolDescription = `Assign wireless profiles to the given camera`;
export const baseUrl = `https://api.meraki.com/api/v1`;
export const path = `/devices/{serial}/camera/wirelessProfiles`;
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
export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "body": z.object({ "ids": z.object({ "backup": z.string().describe("The id of the backup wireless profile").optional(), "primary": z.string().describe("The id of the primary wireless profile").optional(), "secondary": z.string().describe("The id of the secondary wireless profile").optional() }).describe("The ids of the wireless profile to assign to the given camera") }).optional() }).shape;
