import { z } from "zod"

export const toolName = `get_customers_email_email_json`
export const toolDescription = `Retrieve a single Customer by email.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/customers/email/{email}.json`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "email": z.string().describe("Email of the Customer") }).optional() }).shape