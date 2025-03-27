import { z } from "zod"

export const toolName = `get_orders_count_json`
export const toolDescription = `Count all Orders.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/orders/count.json`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional() }).shape