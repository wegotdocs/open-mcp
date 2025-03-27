import { z } from "zod";
export const toolName = `groupv2_approvepending`;
export const toolDescription = `Approve the given membershipId to join the group/clan as long as they have applied.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/GroupV2/{groupId}/Members/Approve/{membershipType}/{membershipId}/`;
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
export const inputParams = z.object({ "path": z.object({ "groupId": z.number().int().describe("ID of the group."), "membershipId": z.number().int().describe("The membership id being approved."), "membershipType": z.number().int().describe("Membership type of the supplied membership ID.") }).optional() }).shape;
