import { z } from "zod";
export const toolName = `uptime_get_check`;
export const toolDescription = `Retrieve an Existing Check`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/uptime/checks/{check_id}`;
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
    "query": [],
    "header": [],
    "path": [
        "check_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "check_id": z.string().uuid().describe("A unique identifier for a check.") }).shape;
