import { z } from "zod";
export const toolName = `deletedeployment`;
export const toolDescription = `Delete a Deployment`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v13/deployments/{id}`;
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
        "url",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [
        "id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "id": z.string().describe("The ID of the deployment to be deleted"),
    "url": z.string().describe("A Deployment or Alias URL. In case it is passed, the ID will be ignored").optional(),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
