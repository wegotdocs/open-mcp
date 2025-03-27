import { z } from "zod";
export const toolName = `fireteam_getactiveprivateclanfireteamcount`;
export const toolDescription = `Gets a count of all active non-public fireteams for the specified clan. Maximum value returned is 25.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Fireteam/Clan/{groupId}/ActiveCount/`;
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
export const inputParams = z.object({ "path": z.object({ "groupId": z.number().int().describe("The group id of the clan.") }).optional() }).shape;
