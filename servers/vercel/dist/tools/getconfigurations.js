import { z } from "zod";
export const toolName = `getconfigurations`;
export const toolDescription = `Get configurations for the authenticated user or team`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/integrations/configurations`;
export const method = `get`;
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
        "view",
        "installationType",
        "integrationIdOrSlug",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "view": z.enum(["account", "project"]), "installationType": z.enum(["marketplace", "external"]).optional(), "integrationIdOrSlug": z.string().describe("ID of the integration").optional(), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape;
