import { z } from "zod";
export const toolName = `get_search_restaurants_tenant_`;
export const toolDescription = `Search restaurants`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/search/restaurants/{tenant}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("A valid country code, e.g. \"uk\".") }).optional(), "query": z.object({ "searchTerm": z.string().describe("User's search term."), "latlong": z.array(z.number()).min(2).max(2).describe("The latitude and longitude coordinates of the location in which to search.\r\nSpecify the coordinates as latitude,longitude."), "limit": z.number().describe("Limit the number of restaurants returned by the API.\r\nValid values are numbers between 1 and 500.\r\nIf not provided, the limit defaults to 300.").optional() }).optional() }).shape;
