import { z } from "zod";
export const toolName = `get_restaurants_tenant_restaurantid_customerclaims_id_`;
export const toolDescription = `Get order claim`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/restaurants/{tenant}/{restaurantId}/customerclaims/{id}`;
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
export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("Two letter code indicating the tenant"), "restaurantId": z.string().describe("Just Eat restaurant identifier"), "id": z.string().describe("Claim identifier") }).optional(), "header": z.object({ "Accept": z.string().describe("Indicates what type of response client understands and is also used for content type negotiation (if version is specified), otherwise tells the server to return the latest version").optional() }).optional() }).shape;
