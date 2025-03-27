import { z } from "zod"

export const toolName = `get_nh_photos`
export const toolDescription = `All New Horizons photos and posters`
export const baseUrl = `https://api.nookipedia.com`
export const path = `/nh/photos`
export const method = `get`
export const security = []

export const inputParams = z.object({ "header": z.object({ "X-API-KEY": z.string().uuid().describe("Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API."), "Accept-Version": z.string().describe("The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.") }).optional(), "query": z.object({ "excludedetails": z.string().describe("When set to `true`, only item names are returned. Instead of an array of objects with all details, the return will be an array of strings.").optional() }).optional() }).shape