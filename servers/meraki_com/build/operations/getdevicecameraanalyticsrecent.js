import { z } from "zod";
export const toolName = `getdevicecameraanalyticsrecent`;
export const toolDescription = `Returns most recent record for analytics zones`;
export const baseUrl = `https://api.meraki.com/api/v1`;
export const path = `/devices/{serial}/camera/analytics/recent`;
export const method = `get`;
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
export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "query": z.object({ "objectType": z.enum(["person", "vehicle"]).describe("[optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].").optional() }).optional() }).shape;
