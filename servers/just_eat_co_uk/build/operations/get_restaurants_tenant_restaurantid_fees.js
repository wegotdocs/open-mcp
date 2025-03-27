import { z } from "zod";
export const toolName = `get_restaurants_tenant_restaurantid_fees`;
export const toolDescription = `Get Restaurant Fees`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/restaurants/{tenant}/{restaurantId}/fees`;
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
export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("A two-character country code for which country the restaurant resides in."), "restaurantId": z.string().describe("A unique identifier for a restaurant") }).optional(), "header": z.object({ "User-Agent": z.string().describe("Request header string that allows the server to identify the application making the request.").optional() }).optional() }).shape;
