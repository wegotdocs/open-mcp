import { z } from "zod";
export const toolName = `destiny2_snapshotloadout`;
export const toolDescription = `Snapshot a loadout with the currently equipped items.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Destiny2/Actions/Loadouts/SnapshotLoadout/`;
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
