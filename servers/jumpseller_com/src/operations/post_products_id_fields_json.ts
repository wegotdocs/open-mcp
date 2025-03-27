import { z } from "zod"

export const toolName = `post_products_id_fields_json`
export const toolDescription = `Add an existing Custom Field to a Product.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/products/{id}/fields.json`
export const method = `post`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the Product") }).optional(), "body": z.object({ "field": z.object({ "id": z.number().int().describe("Unique identifier of the ProductCustomField (custom_field_id)").optional(), "value": z.string().describe("The value for the ProductCustomField").optional() }).optional() }).optional() }).shape