import { z } from "zod"

export const toolName = `post_hooks_json`
export const toolDescription = `Create a new Hook.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/hooks.json`
export const method = `post`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "body": z.object({ "hook": z.object({ "event": z.enum(["order_updated","order_pending_payment","order_paid","order_shipped","order_canceled","order_abandoned","product_created","product_updated","product_deleted","customer_created","customer_updated","customer_deleted"]).describe("Event associated with Hook"), "url": z.string().describe("Hook URL to be notified") }).optional() }).optional() }).shape