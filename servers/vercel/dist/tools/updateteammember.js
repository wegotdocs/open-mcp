import { z } from "zod";
export const toolName = `updateteammember`;
export const toolDescription = `Update a Team Member`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/teams/{teamId}/members/{uid}`;
export const method = `patch`;
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
    "query": [],
    "header": [],
    "path": [
        "uid"
    ],
    "cookie": [],
    "body": [
        "confirmed",
        "role",
        "projects",
        "joinedFrom"
    ]
};
export const flatMap = {};
export const inputParams = {
    "uid": z.string().describe("The ID of the member."),
    "confirmed": z.literal(true).describe("Accept a user who requested access to the team.").optional(),
    "role": z.string().describe("The role in the team of the member.").optional(),
    "projects": z.array(z.object({ "projectId": z.string().max(256).describe("The ID of the project."), "role": z.union([z.literal("ADMIN"), z.literal("PROJECT_VIEWER"), z.literal("PROJECT_DEVELOPER"), z.literal(null)]).nullable().describe("The project role of the member that will be added. \\\"null\\\" will remove this project level role.") }).strict()).optional(),
    "joinedFrom": z.object({ "ssoUserId": z.null().optional() }).strict().optional()
};
