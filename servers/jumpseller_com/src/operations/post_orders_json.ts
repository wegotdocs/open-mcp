import { z } from "zod"

export const toolName = `post_orders_json`
export const toolDescription = `Create a new Order.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/orders.json`
export const method = `post`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "body": z.object({ "order": z.any().optional() }).optional() }).shape