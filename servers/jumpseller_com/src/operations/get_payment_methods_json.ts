import { z } from "zod"

export const toolName = `get_payment_methods_json`
export const toolDescription = `Retrieve all Store's Payment Methods.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/payment_methods.json`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional() }).shape