import { z } from "zod";
export const toolName = `get_countries_country_code_regions_json`;
export const toolDescription = `Retrieve all Regions from a single Country.`;
export const baseUrl = `https://api.jumpseller.com/v1`;
export const path = `/countries/{country_code}/regions.json`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "country_code": z.string().describe("ISO3166 Country Code") }).optional() }).shape;
