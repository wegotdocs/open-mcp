import { z } from "zod"

export const toolName = `get_nh_furniture`
export const toolDescription = `All New Horizons furniture`
export const baseUrl = `https://api.nookipedia.com`
export const path = `/nh/furniture`
export const method = `get`
export const security = []

export const inputParams = z.object({ "header": z.object({ "X-API-KEY": z.string().uuid().describe("Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API."), "Accept-Version": z.string().describe("The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.") }).optional(), "query": z.object({ "category": z.enum(["Housewares","Miscellaneous","Wall-mounted"]).describe("Specify the category of furniture to return (houswares, miscellaneous, or wall-mounted).").optional(), "color": z.array(z.enum(["Aqua","Beige","Black","Blue","Brown","Colorful","Gray","Green","Orange","Pink","Purple","Red","White","Yellow"])).describe("Return furniture that matches the provided colors (may specify one or two colors).").optional(), "excludedetails": z.string().describe("When set to `true`, only furniture names are returned. Instead of an array of objects with all details, the return will be an array of strings.").optional() }).optional() }).shape