import { z } from "zod";
export const toolName = `inviteusertoteam`;
export const toolDescription = `Invite a user`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/teams/{teamId}/members`;
export const method = `post`;
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
    "path": [],
    "cookie": [],
    "body": [
        "uid",
        "email",
        "role",
        "projects"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "uid": z.string().describe("The id of the user to invite").optional(), "email": z.string().email().describe("The email address of the user to invite").optional(), "role": z.enum(["OWNER", "MEMBER", "DEVELOPER", "SECURITY", "BILLING", "VIEWER", "CONTRIBUTOR"]).describe("The role of the user to invite"), "projects": z.array(z.object({ "projectId": z.string().max(64).describe("The ID of the project."), "role": z.enum(["ADMIN", "PROJECT_VIEWER", "PROJECT_DEVELOPER"]).describe("Sets the project roles for the invited user") }).strict()).optional() }).shape;
