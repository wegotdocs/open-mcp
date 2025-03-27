import { z } from "zod"

export const toolName = `get_products_status_status_json`
export const toolDescription = `Retrieve Products filtered by status.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/products/status/{status}.json`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token."), "locale": z.string().describe("Locale code of the translation").optional() }).optional(), "path": z.object({ "status": z.enum(["available","not-available","disabled"]).describe("Status of the Product used as filter") }).optional() }).shape