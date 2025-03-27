import { z } from "zod"

export const toolName = `post_checkout_custom_fields_json`
export const toolDescription = `Create a new CheckoutCustomField.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/checkout_custom_fields.json`
export const method = `post`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "body": z.object({ "checkout_custom_field": z.object({ "area": z.enum(["contact","billing_shipping","other"]).describe("Area of the CheckoutCustomField").optional(), "custom_field_select_options": z.array(z.string()).describe("The values for the CheckoutCustomField selection").optional(), "deletable": z.boolean().describe("True if the CheckoutCustomField can be removed from the store"), "label": z.string().describe("Label given to the CheckoutCustomField").optional(), "position": z.number().int().describe("Position of the CheckoutCustomField").optional(), "required": z.boolean().describe("True if the CheckoutCustomField is mandatory"), "type": z.enum(["text","select","input","checkbox","date"]).describe("Type of the CheckoutCustomField").optional() }).optional() }).optional() }).shape