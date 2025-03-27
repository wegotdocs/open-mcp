import { z } from "zod"

export const toolName = `put_pages_id_json`
export const toolDescription = `Update a Page.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/pages/{id}.json`
export const method = `put`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the Page") }).optional(), "body": z.object({ "page": z.object({ "body": z.string().describe("Body of the Page").optional(), "categories": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().optional(), "position": z.number().int().optional() })).describe("Page categories to which the Page belongs to").optional(), "image": z.object({ "id": z.number().int().optional(), "url": z.string().optional() }).describe("Image of the Page").optional(), "meta_description": z.string().describe("Meta description of the Page").optional(), "page_title": z.string().describe("Meta title of the Page").optional(), "permalink": z.string().describe("URL of the Page").optional(), "status": z.enum(["public","draft","hidden"]).describe("Status of the Page").optional(), "template": z.number().int().describe("ID of the Page template. Use null for the blank layout ('None')").optional(), "title": z.string().describe("Title of the Page").optional() }).optional() }).optional() }).shape