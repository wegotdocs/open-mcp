import { z } from "zod";
export const toolName = `apps_list`;
export const toolDescription = `List All Apps`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/apps`;
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
        "per_page",
        "with_projects"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional(),
    "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
    "with_projects": z.boolean().describe("Whether the project_id of listed apps should be fetched and included.").optional()
};
