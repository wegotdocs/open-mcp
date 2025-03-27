import { z } from "zod"

export const toolName = `get_products_id_fields_json`
export const toolDescription = `Retrieve all Product Custom Fields`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/products/{id}/fields.json`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the Product") }).optional() }).shape