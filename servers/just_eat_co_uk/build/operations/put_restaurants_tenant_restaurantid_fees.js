import { z } from "zod";
export const toolName = `put_restaurants_tenant_restaurantid_fees`;
export const toolDescription = `Create or Update Restaurant Fees`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/restaurants/{tenant}/{restaurantId}/fees`;
export const method = `put`;
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
export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("A two-character country code for which country the restaurant resides in."), "restaurantId": z.string().describe("A unique identifier for a restaurant") }).optional(), "header": z.object({ "User-Agent": z.string().describe("Request header string that allows the server to identify the application making the request.").optional() }).optional(), "body": z.object({ "bagFee": z.object({ "description": z.string().describe("A description of what the Fee is").optional(), "serviceTypes": z.object({ "collection": z.object({ "amount": z.number().describe("The value to apply to the basket for this Fee in the smallest unit of currency").optional() }).describe("Configuration of the fee for the collection service type").optional(), "default": z.object({ "amount": z.number().describe("The value to apply to the basket for this Fee in the smallest unit of currency").optional() }).describe("Configuration of the fee for any service type which is not explicitly configured").optional(), "delivery": z.object({ "amount": z.number().describe("The value to apply to the basket for this Fee in the smallest unit of currency").optional() }).describe("Configuration of the fee for the delivery service type").optional() }).describe("Contains Service type specific fee values. If set, default can be used to apply a fee to as yet unspecified service types").optional() }).describe("A fee applied for bags used for delivery and collection orders").optional() }).describe("An object encapsulating all possible fees which a restaurant can apply to itself").optional() }).shape;
