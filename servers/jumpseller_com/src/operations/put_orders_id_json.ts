import { z } from "zod"

export const toolName = `put_orders_id_json`
export const toolDescription = `Modify an existing Order.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/orders/{id}.json`
export const method = `put`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the Order") }).optional(), "body": z.object({ "order": z.any().optional() }).optional() }).shape