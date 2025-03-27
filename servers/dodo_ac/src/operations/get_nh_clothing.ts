import { z } from "zod"

export const toolName = `get_nh_clothing`
export const toolDescription = `All New Horizons clothing`
export const baseUrl = `https://api.nookipedia.com`
export const path = `/nh/clothing`
export const method = `get`
export const security = []

export const inputParams = z.object({ "header": z.object({ "X-API-KEY": z.string().uuid().describe("Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API."), "Accept-Version": z.string().describe("The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.") }).optional(), "query": z.object({ "category": z.enum(["Tops","Bottoms","Dress-up","Headwear","Accessories","Socks","Shoes","Bags","Umbrellas"]).describe("Specify the category of clothing to return.").optional(), "color": z.array(z.enum(["Aqua","Beige","Black","Blue","Brown","Colorful","Gray","Green","Orange","Pink","Purple","Red","White","Yellow"])).describe("Return clothing that matches the provided colors (may specify one or two colors). Colors are used for gifting villagers.").optional(), "style": z.array(z.enum(["Active","Cool","Cute","Elegant","Gorgeous","Simple"])).describe("Return clothing that matches the provided styles (may specify one or two styles). Styles are used for gifting villagers.").optional(), "labeltheme": z.enum(["Comfy","Everyday","Fairy tale","Formal","Goth","Outdoorsy","Party","Sporty","Theatrical","Vacation","Work"]).describe("Return clothing that have the specified Label theme. This is used for completing the requested outfit theme for [Label](https://nookipedia.com/wiki/Label) when she visits the player's island.").optional(), "excludedetails": z.string().describe("When set to `true`, only clothing names are returned. Instead of an array of objects with all details, the return will be an array of strings.").optional() }).optional() }).shape