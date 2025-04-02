import { z } from "zod";
export const toolName = `apps_list_deployments`;
export const toolDescription = `List App Deployments`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/apps/{app_id}/deployments`;
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
        "page",
        "per_page"
    ],
    "header": [],
    "path": [
        "app_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "app_id": z.string().describe("The app ID"), "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return."), "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page") }).shape;
