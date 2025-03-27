import { z } from "zod"

export const toolName = `put_customers_id_fields_field_id_`
export const toolDescription = `Update a Customer Additional Field.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/customers/{id}/fields/{field_id}`
export const method = `put`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the Customer"), "field_id": z.number().int().describe("Id of the Customer Additional Field") }).optional(), "body": z.object({ "customer_additional_field": z.object({ "checkout_custom_field_id": z.number().int().describe("Unique identifier of the Checkout Custom Field").optional(), "value": z.string().describe("Value of the Customer Additional Field").optional() }).optional() }).optional() }).shape