import { z } from "zod";
export const toolName = `requestpromote`;
export const toolDescription = `Points all production domains for a project to the given deploy`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v10/projects/{projectId}/promote/{deploymentId}`;
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
        "projectId",
        "deploymentId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "projectId": z.string(), "deploymentId": z.string(), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape;
