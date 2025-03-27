import { z } from "zod"

export const toolName = `get_products_json`
export const toolDescription = `Retrieve all Products.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/products.json`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token."), "limit": z.number().int().lte(200).describe("List restriction"), "page": z.number().int().describe("List page"), "locale": z.string().describe("Locale code of the translation").optional() }).optional() }).shape