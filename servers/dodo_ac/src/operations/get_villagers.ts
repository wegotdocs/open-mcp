import { z } from "zod"

export const toolName = `get_villagers`
export const toolDescription = `Villagers`
export const baseUrl = `https://api.nookipedia.com`
export const path = `/villagers`
export const method = `get`
export const security = []

export const inputParams = z.object({ "header": z.object({ "X-API-KEY": z.string().uuid().describe("Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API."), "Accept-Version": z.string().describe("The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.") }).optional(), "query": z.object({ "name": z.string().describe("Villager name. For most names you will get back an array with one object, but note that names are not a unique identifier across the series, as there are 3 names that are shared by multiple villagers (Lulu, Petunia, Carmen). For those 3 names you will get back an array with 2 objects. How you disambiguate between these villagers is up to you.").optional(), "species": z.enum(["alligator","anteater","bear","bird","bull","cat","cub","chicken","cow","deer","dog","duck","eagle","elephant","frog","goat","gorilla","hamster","hippo","horse","koala","kangaroo","lion","monkey","mouse","octopus","ostrich","penguin","pig","rabbit","rhino","sheep","squirrel","tiger","wolf"]).describe("Retrieve villagers of a certain species.").optional(), "personality": z.enum(["lazy","jock","cranky","smug","normal","peppy","snooty","sisterly"]).describe("Retrieve villagers with a certain personality. For 'sisterly', note that the community often also calls it 'uchi' or 'big sister'.").optional(), "game": z.array(z.enum(["DNM","AC","E_PLUS","WW","CF","NL","WA","NH","FILM","HHD","PC"])).describe("Retrieve villagers that appear in all listed games. For example, if you want only villagers that appear in both *New Horizons* and *Pocket Camp*, you would send in `?game=nh&game=pc`.").optional(), "birthmonth": z.string().describe("Retrieve villagers born in a specific month. Value may be the month's name (`jan`, `january`) or the integer representing the month (`01`, `1`).").optional(), "birthday": z.string().describe("Use with `birthmonth` to get villager(s) born on a specific day. Value should be an int, 1 through 31.").optional(), "nhdetails": z.string().describe("When set to `true`, an `nh_details` object will be included that contains *New Horizons* details about the villager. If the villager does not appear in *New Horizons*, the returned `nh_details` field will be set to null.").optional(), "excludedetails": z.string().describe("When set to `true`, only villager names are returned. Instead of an array of objects with all details, the return will be an array of strings.").optional(), "thumbsize": z.number().int().describe("Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL. Note that requesting specific image sizes for long lists may result in a very long response time.").optional() }).optional() }).shape