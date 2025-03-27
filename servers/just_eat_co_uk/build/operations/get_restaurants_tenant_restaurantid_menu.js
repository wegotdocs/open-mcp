import { z } from "zod";
export const toolName = `get_restaurants_tenant_restaurantid_menu`;
export const toolDescription = `Get the latest version of the restaurant's full menu`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/restaurants/{tenant}/{restaurantId}/menu`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("The tenant of the restaurant in which to put a menu"), "restaurantId": z.string().describe("The restaurant identifier to associated with the menu") }).optional(), "header": z.object({ "Authorization": z.string().describe("Containing a partner issued API key e.g. Bearer ABCDE123456789") }).optional() }).shape;
