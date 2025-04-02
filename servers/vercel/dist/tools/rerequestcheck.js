import { z } from "zod";
export const toolName = `rerequestcheck`;
export const toolDescription = `Rerequest a check`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/deployments/{deploymentId}/checks/{checkId}/rerequest`;
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
        "deploymentId",
        "checkId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "deploymentId": z.string().describe("The deployment to rerun the check for."), "checkId": z.string().describe("The check to rerun"), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape;
