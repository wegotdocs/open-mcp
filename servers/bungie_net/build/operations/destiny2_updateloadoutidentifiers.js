import { z } from "zod";
export const toolName = `destiny2_updateloadoutidentifiers`;
export const toolDescription = `Update the color, icon, and name of a loadout.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Destiny2/Actions/Loadouts/UpdateLoadoutIdentifiers/`;
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
