import { z } from "zod";
export const toolName = `delete_aliases_v2_trackingid_type_externalid_`;
export const toolDescription = `Deletes an alias`;
export const baseUrl = `https://tracking.api.here.com`;
export const path = `/aliases/v2/{trackingId}/{type}/{externalId}`;
export const method = `delete`;
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
export const inputParams = z.object({}).shape;
