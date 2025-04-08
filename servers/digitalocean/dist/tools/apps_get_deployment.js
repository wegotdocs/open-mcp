import { z } from "zod";
export const toolName = `apps_get_deployment`;
export const toolDescription = `Retrieve an App Deployment`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/apps/{app_id}/deployments/{deployment_id}`;
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
        "app_id",
        "deployment_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "app_id": z.string().describe("The app ID"),
    "deployment_id": z.string().describe("The deployment ID")
};
