import { z } from "zod";
export const toolName = `fireteam_getclanfireteam`;
export const toolDescription = `Gets a specific fireteam.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Fireteam/Clan/{groupId}/Summary/{fireteamId}/`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "path": z.object({ "fireteamId": z.number().int().describe("The unique id of the fireteam."), "groupId": z.number().int().describe("The group id of the clan.") }).optional() }).shape;
