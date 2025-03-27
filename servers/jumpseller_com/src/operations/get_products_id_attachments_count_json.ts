import { z } from "zod"

export const toolName = `get_products_id_attachments_count_json`
export const toolDescription = `Count all Product Attachments.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/products/{id}/attachments/count.json`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("ID of the Product") }).optional() }).shape