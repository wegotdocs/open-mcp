import { z } from "zod"

export const toolName = `content_getcontentbytagandtype`
export const toolDescription = `Returns the newest item that matches a given tag and Content Type.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Content/GetContentByTagAndType/{tag}/{type}/{locale}/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "head": z.boolean().describe("Not used.").optional() }).optional(), "path": z.object({ "locale": z.string(), "tag": z.string(), "type": z.string() }).optional() }).shape