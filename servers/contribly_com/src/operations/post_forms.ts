import { z } from "zod"

export const toolName = `post_forms`
export const toolDescription = `Create a form`
export const baseUrl = `https://api.contribly.com/1`
export const path = `/forms`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "callToAction": z.string().optional(), "cssUrl": z.string().optional(), "fields": z.array(z.object({ "description": z.string().optional(), "label": z.string().optional(), "name": z.string().optional(), "options": z.array(z.string()).optional(), "public": z.boolean().optional(), "required": z.boolean().optional(), "type": z.string().optional() })).optional(), "heading": z.string().optional(), "name": z.string().optional(), "noCss": z.boolean().optional(), "tags": z.array(z.object({ "colour": z.string().describe("Optional HTML hexcode colour").optional(), "id": z.string(), "name": z.string(), "tagSet": z.object({ "id": z.string(), "name": z.string() }).optional(), "urlWords": z.string().optional() })).optional() }).optional() }).shape