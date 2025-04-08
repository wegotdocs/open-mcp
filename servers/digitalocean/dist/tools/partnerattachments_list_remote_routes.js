import { z } from "zod";
export const toolName = `partnerattachments_list_remote_routes`;
export const toolDescription = `List remote routes for a partner attachment`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/partner_network_connect/attachments/{pa_id}/remote_routes`;
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
        "pa_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "pa_id": z.string().describe("A unique identifier for a partner attachment."),
    "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
    "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
};
