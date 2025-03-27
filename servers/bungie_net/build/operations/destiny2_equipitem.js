import { z } from "zod";
export const toolName = `destiny2_equipitem`;
export const toolDescription = `Equip an item. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Destiny2/Actions/Items/EquipItem/`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({}).shape;
