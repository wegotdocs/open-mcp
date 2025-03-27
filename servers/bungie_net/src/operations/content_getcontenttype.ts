import { z } from "zod"

export const toolName = `content_getcontenttype`
export const toolDescription = `Gets an object describing a particular variant of content.`
export const baseUrl = `https://www.bungie.net/Platform`
export const path = `/Content/GetContentType/{type}/`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "type": z.string() }).optional() }).shape