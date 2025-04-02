import { z } from "zod";
export const toolName = `getalllogdrains`;
export const toolDescription = `Retrieves a list of all the Log Drains`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/log-drains`;
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
        "projectId",
        "projectIdOrName",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "projectId": z.string().regex(new RegExp("^[a-zA-z0-9_]+$")).optional(), "projectIdOrName": z.string().optional(), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape;
