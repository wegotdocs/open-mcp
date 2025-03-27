import { z } from "zod";
export const toolName = `patch_spaces_id_groups_groupid_`;
export const toolDescription = `Modify a group`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/spaces/{id}/groups/{groupId}`;
export const method = `patch`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the space"), "groupId": z.string().describe("Id of the group to modify") }).optional(), "body": z.string().optional() }).shape;
