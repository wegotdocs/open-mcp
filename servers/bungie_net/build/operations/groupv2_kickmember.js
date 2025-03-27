import { z } from "zod";
export const toolName = `groupv2_kickmember`;
export const toolDescription = `Kick a member from the given group, forcing them to reapply if they wish to re-join the group. You must have suitable permissions in the group to perform this operation.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/Kick/`;
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
export const inputParams = z.object({ "path": z.object({ "groupId": z.number().int().describe("Group ID to kick the user from."), "membershipId": z.number().int().describe("Membership ID to kick."), "membershipType": z.number().int().describe("Membership type of the provided membership ID.") }).optional() }).shape;
