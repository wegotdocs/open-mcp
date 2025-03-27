import { z } from "zod"

export const toolName = `get_tags`
export const toolDescription = `List tags`
export const baseUrl = `https://api.contribly.com/1`
export const path = `/tags`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "ownedBy": z.string().describe("Restrict results to those owned by this user.").optional(), "tagSet": z.string().describe("Restrict results to tags belonging to this tag set.").optional(), "urlWords": z.string().describe("Restrict results by urlWords. Should be used with ownedBy when searching for one of your own tags.").optional() }).optional() }).shape