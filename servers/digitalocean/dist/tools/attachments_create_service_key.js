import { z } from "zod";
export const toolName = `attachments_create_service_key`;
export const toolDescription = `Regenerate the service key for the partner attachment`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/partner_network_connect/attachments/{pa_id}/service_key`;
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
        "pa_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "pa_id": z.string().describe("A unique identifier for a partner attachment.") }).shape;
