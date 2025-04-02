import { z } from "zod";
export const toolName = `uptime_list_alerts`;
export const toolDescription = `List All Alerts`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/uptime/checks/{check_id}/alerts`;
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
        "per_page",
        "page"
    ],
    "header": [],
    "path": [
        "check_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "check_id": z.string().uuid().describe("A unique identifier for a check."), "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page"), "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.") }).shape;
