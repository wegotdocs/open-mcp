import { z } from "zod";
export const toolName = `destiny2_reportoffensivepostgamecarnagereportplayer`;
export const toolDescription = `Report a player that you met in an activity that was engaging in ToS-violating activities. Both you and the offending player must have played in the activityId passed in. Please use this judiciously and only when you have strong suspicions of violation, pretty please.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/Destiny2/Stats/PostGameCarnageReport/{activityId}/Report/`;
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
export const inputParams = z.object({ "path": z.object({ "activityId": z.number().int().describe("The ID of the activity where you ran into the brigand that you're reporting.") }).optional() }).shape;
