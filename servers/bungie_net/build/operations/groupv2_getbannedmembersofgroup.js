import { z } from "zod";
export const toolName = `groupv2_getbannedmembersofgroup`;
export const toolDescription = `Get the list of banned members in a given group. Only accessible to group Admins and above. Not applicable to all groups. Check group features.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/GroupV2/{groupId}/Banned/`;
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
export const inputParams = z.object({ "query": z.object({ "currentpage": z.number().int().describe("Page number (starting with 1). Each page has a fixed size of 50 entries.") }).optional(), "path": z.object({ "groupId": z.number().int().describe("Group ID whose banned members you are fetching") }).optional() }).shape;
