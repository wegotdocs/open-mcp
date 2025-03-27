import { z } from "zod"

export const toolName = `content_searchhelparticles`
export const toolDescription = `Search for Help Articles.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Content/SearchHelpArticles/{searchtext}/{size}/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "searchtext": z.string(), "size": z.string() }).optional() }).shape