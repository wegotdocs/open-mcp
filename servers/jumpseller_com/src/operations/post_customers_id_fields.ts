import { z } from "zod"

export const toolName = `post_customers_id_fields`
export const toolDescription = `Adds Customer Additional Fields to a Customer.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/customers/{id}/fields`
export const method = `post`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the Customer") }).optional(), "body": z.object({ "customer_additional_field": z.object({ "checkout_custom_field_id": z.number().int().describe("Unique identifier of the Checkout Custom Field").optional(), "value": z.string().describe("Value of the Customer Additional Field").optional() }).optional() }).optional() }).shape