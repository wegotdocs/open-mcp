import { z } from "zod";
export const toolName = `groupv2_individualgroupinvite`;
export const toolDescription = `Invite a user to join this group.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/GroupV2/{groupId}/Members/IndividualInvite/{membershipType}/{membershipId}/`;
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
export const inputParams = z.object({ "path": z.object({ "groupId": z.number().int().describe("ID of the group you would like to join."), "membershipId": z.number().int().describe("Membership id of the account being invited."), "membershipType": z.number().int().describe("MembershipType of the account being invited.") }).optional() }).shape;
