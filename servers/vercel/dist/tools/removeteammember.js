import { z } from "zod";
export const toolName = `removeteammember`;
export const toolDescription = `Remove a Team Member`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/teams/{teamId}/members/{uid}`;
export const method = `delete`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const keys = {
    "query": [
        "newDefaultTeamId"
    ],
    "header": [],
    "path": [
        "uid"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "uid": z.string().describe("The user ID of the member."), "newDefaultTeamId": z.string().describe("The ID of the team to set as the new default team for the Northstar user.").optional() }).shape;
