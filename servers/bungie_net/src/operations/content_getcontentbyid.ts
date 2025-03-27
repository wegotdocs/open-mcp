import { z } from "zod"

export const toolName = `content_getcontentbyid`
export const toolDescription = `Returns a content item referenced by id`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Content/GetContentById/{id}/{locale}/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "head": z.boolean().describe("false").optional() }).optional(), "path": z.object({ "id": z.number().int(), "locale": z.string() }).optional() }).shape