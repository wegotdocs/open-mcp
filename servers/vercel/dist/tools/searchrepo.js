import { z } from "zod";
export const toolName = `searchrepo`;
export const toolDescription = `List git repositories linked to namespace by provider`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/integrations/search-repo`;
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
        "query",
        "namespaceId",
        "provider",
        "installationId",
        "host",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "query": z.string().optional(),
    "namespaceId": z.union([z.string(), z.number()]).nullable().optional(),
    "provider": z.enum(["github", "github-custom-host", "gitlab", "bitbucket"]).optional(),
    "installationId": z.string().optional(),
    "host": z.string().describe("The custom Git host if using a custom Git provider, like GitHub Enterprise Server").optional(),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
