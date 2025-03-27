import { z } from "zod"

export const toolName = `productlistingsall`
export const toolDescription = `List product listings`
export const baseUrl = `https://api.apideck.com`
export const path = `/ecosystems/{ecosystem_id}/products/{id}/listings`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "ecosystem_id": z.string(), "id": z.string().describe("ID of the record you are acting upon.") }).optional(), "query": z.object({ "cursor": z.string().nullable().describe("Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.").optional(), "limit": z.number().int().gte(1).lte(200).describe("Number of records to return") }).optional() }).shape