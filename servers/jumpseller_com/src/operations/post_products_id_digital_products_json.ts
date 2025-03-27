import { z } from "zod"

export const toolName = `post_products_id_digital_products_json`
export const toolDescription = `Create a new Product DigitalProduct.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/products/{id}/digital_products.json`
export const method = `post`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the Product") }).optional(), "body": z.object({ "digital_product": z.object({ "filename": z.string().describe("Filename of the digital product (with file extensison)").optional(), "url": z.string().describe("Public accessible URL with the desired file contents. (LIMIT: 100MB)").optional() }).optional() }).optional() }).shape