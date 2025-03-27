import { z } from "zod"

export const toolName = `put_customer_categories_id_json`
export const toolDescription = `Update a CustomerCategory.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/customer_categories/{id}.json`
export const method = `put`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the CustomerCategory") }).optional(), "body": z.object({ "category": z.object({ "name": z.string().describe("Name of the CustomerCategory").optional() }).optional() }).optional() }).shape