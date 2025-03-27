import { z } from "zod";
export const toolName = `get_nh_sea_sea_creature_`;
export const toolDescription = `Single New Horizons sea creature`;
export const baseUrl = `https://api.nookipedia.com`;
export const path = `/nh/sea/{sea_creature}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "sea_creature": z.string().describe("The name of the sea creature you wish to retrieve information about.") }).optional(), "header": z.object({ "X-API-KEY": z.string().uuid().describe("Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API."), "Accept-Version": z.string().describe("The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.") }).optional(), "query": z.object({ "thumbsize": z.number().int().describe("Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.").optional() }).optional() }).shape;
