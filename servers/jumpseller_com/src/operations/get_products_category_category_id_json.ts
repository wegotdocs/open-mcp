import { z } from "zod"

export const toolName = `get_products_category_category_id_json`
export const toolDescription = `Retrieve Products filtered by category.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/products/category/{category_id}.json`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token."), "locale": z.string().describe("Locale code of the translation").optional() }).optional(), "path": z.object({ "category_id": z.number().int().describe("Category ID of the Product used as filter") }).optional() }).shape