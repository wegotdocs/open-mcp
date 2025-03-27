import { z } from "zod"

export const toolName = `get_products_search_json`
export const toolDescription = `Retrieve a Product List from a query.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/products/search.json`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token."), "locale": z.string().describe("Locale code of the translation").optional(), "query": z.string().describe("Text to query for the Product"), "fields": z.enum(["sku","barcode","brand","name","description","variants","option_name","custom_fields","custom_fields_selects"]).describe("Comma separated values of the fields to query for the Product").optional() }).optional() }).shape