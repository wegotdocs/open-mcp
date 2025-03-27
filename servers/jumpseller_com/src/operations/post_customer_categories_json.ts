import { z } from "zod"

export const toolName = `post_customer_categories_json`
export const toolDescription = `Create a new CustomerCategory.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/customer_categories.json`
export const method = `post`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "body": z.object({ "category": z.object({ "name": z.string().describe("Name of the CustomerCategory").optional() }).optional() }).optional() }).shape