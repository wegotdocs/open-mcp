import { z } from "zod";
export const toolName = `apps_restart`;
export const toolDescription = `Restart an App`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/apps/{app_id}/restart`;
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
    "query": [],
    "header": [],
    "path": [
        "app_id"
    ],
    "cookie": [],
    "body": [
        "components"
    ]
};
export const flatMap = {};
export const inputParams = {
    "app_id": z.string().describe("The app ID"),
    "components": z.array(z.string()).optional()
};
