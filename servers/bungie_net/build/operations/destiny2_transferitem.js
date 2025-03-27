import { z } from "zod";
export const toolName = `destiny2_transferitem`;
export const toolDescription = `Transfer an item to/from your vault. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item. itshappening.gif`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Destiny2/Actions/Items/TransferItem/`;
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
