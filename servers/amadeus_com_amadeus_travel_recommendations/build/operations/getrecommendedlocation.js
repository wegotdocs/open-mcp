import { z } from "zod";
export const toolName = `getrecommendedlocation`;
export const toolDescription = `GET recommended destinations`;
export const baseUrl = `https://test.api.amadeus.com/v1`;
export const path = `/reference-data/recommended-locations`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "cityCodes": z.string().describe("City used by the algorythm to recommend new destination. Several cities can be specified using comma.\n\nCity codes follow [IATA standard](http://www.iata.org/publications/Pages/code-search.aspx)"), "travelerCountryCode": z.string().min(2).max(2).describe("Origin country of the traveler following [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code format (e.g. US)"), "destinationCountryCodes": z.string().describe("List of country the traveler want to visit, separated with comma.\n\nCountry codes follow [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code format (e.g. US)").optional() }).optional() }).shape;
