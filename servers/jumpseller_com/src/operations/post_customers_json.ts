import { z } from "zod"

export const toolName = `post_customers_json`
export const toolDescription = `Create a new Customer.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/customers.json`
export const method = `post`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "body": z.object({ "customer": z.object({ "billing_address": z.any().optional(), "customer_category": z.array(z.number().int()).optional(), "email": z.string().describe("Email of the Customer").optional(), "password": z.string().describe("Password").optional(), "phone": z.string().describe("Phone of the Customer").optional(), "shipping_address": z.any().optional(), "status": z.enum(["approved","pending","disabled"]).describe("Status of the Customer").optional() }).optional() }).optional() }).shape