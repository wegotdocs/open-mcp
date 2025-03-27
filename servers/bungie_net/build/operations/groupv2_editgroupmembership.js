import { z } from "zod";
export const toolName = `groupv2_editgroupmembership`;
export const toolDescription = `Edit the membership type of a given member. You must have suitable permissions in the group to perform this operation.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/SetMembershipType/{memberType}/`;
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
export const inputParams = z.object({ "path": z.object({ "groupId": z.number().int().describe("ID of the group to which the member belongs."), "membershipId": z.number().int().describe("Membership ID to modify."), "membershipType": z.number().int().describe("Membership type of the provide membership ID."), "memberType": z.number().int().describe("New membertype for the specified member.") }).optional() }).shape;
