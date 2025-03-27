import { z } from "zod";
export const toolName = `put_api_v1_custom_pages_homepage_instance`;
export const toolDescription = `Set instance custom homepage`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/custom-pages/homepage/instance`;
export const method = `put`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "body": z.object({ "content": z.string().describe("content of the homepage, that will be injected in the client").optional() }).optional() }).shape;
