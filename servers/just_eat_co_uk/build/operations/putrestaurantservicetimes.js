import { z } from "zod";
export const toolName = `putrestaurantservicetimes`;
export const toolDescription = `Create or update service times`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/restaurants/{tenant}/{restaurantId}/servicetimes`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("Two letter code of restaurant's tenant"), "restaurantId": z.string().describe("The restaurant identifier") }).optional(), "body": z.object({ "serviceTimes": z.string().optional() }).optional() }).shape;
