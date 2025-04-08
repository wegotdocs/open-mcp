import { z } from "zod";
export const toolName = `createaccessgroupproject`;
export const toolDescription = `Create an access group project`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/access-groups/{accessGroupIdOrName}/projects`;
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
    "query": [
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [
        "accessGroupIdOrName"
    ],
    "cookie": [],
    "body": [
        "projectId",
        "role"
    ]
};
export const flatMap = {};
export const inputParams = {
    "accessGroupIdOrName": z.string(),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
    "projectId": z.string().max(256).describe("The ID of the project."),
    "role": z.enum(["ADMIN", "PROJECT_VIEWER", "PROJECT_DEVELOPER"]).describe("The project role that will be added to this Access Group.")
};
