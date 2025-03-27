import { z } from "zod"

export const toolName = `get_products_id_json`
export const toolDescription = `Retrieve a single Product.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/products/{id}.json`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token."), "locale": z.string().describe("Locale code of the translation").optional() }).optional(), "path": z.object({ "id": z.number().int().describe("ID of the Product") }).optional() }).shape