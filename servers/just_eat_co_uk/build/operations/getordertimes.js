import { z } from "zod";
export const toolName = `getordertimes`;
export const toolDescription = `Get the restaurant's delivery and collection lead times`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/restaurants/{tenant}/{restaurantId}/ordertimes`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("A valid country code, e.g. \"uk\"."), "restaurantId": z.string().describe("The restaurant Id.") }).optional(), "header": z.object({ "Authorization": z.string().describe("OAuth2 token issued for logged in restaurant") }).optional() }).shape;
