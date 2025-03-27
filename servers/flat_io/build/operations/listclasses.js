import { z } from "zod";
export const toolName = `listclasses`;
export const toolDescription = `List the classes available for the current user`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/classes`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "query": z.object({ "state": z.enum(["active", "inactive", "archived"]).describe("Filter the classes by state") }).optional() }).shape;
