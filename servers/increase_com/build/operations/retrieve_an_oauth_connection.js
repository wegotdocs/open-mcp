import { z } from "zod";
export const toolName = `retrieve_an_oauth_connection`;
export const toolDescription = `Retrieve an OAuth Connection`;
export const baseUrl = `https://api.increase.com`;
export const path = `/oauth_connections/{oauth_connection_id}`;
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
export const inputParams = z.object({ "path": z.object({ "oauth_connection_id": z.string().describe("The identifier of the OAuth Connection.") }).optional() }).shape;
