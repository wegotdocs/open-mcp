import { z } from "zod";
export const toolName = `apps_get_exec_active_deployment`;
export const toolDescription = `Retrieve Exec URL`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/apps/{app_id}/components/{component_name}/exec`;
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
        "component_name"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "app_id": z.string().describe("The app ID"), "component_name": z.string().describe("An optional component name. If set, logs will be limited to this component only.") }).shape;
