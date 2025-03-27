import { z } from "zod"

export const toolName = `updateordertime`
export const toolDescription = `Update the restaurant's delivery and collection lead times`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/restaurants/{tenant}/{restaurantId}/ordertimes/{dayOfWeek}/{serviceType}`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("A valid country code, e.g. \"uk\"."), "restaurantId": z.string().describe("The restaurant Id."), "dayOfWeek": z.enum(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]).describe("Day of week for order time"), "serviceType": z.enum(["Delivery","Collection"]).describe("Service type of the order time") }).optional(), "header": z.object({ "Authorization": z.string().describe("OAuth2 token issued for logged in restaurant OR API token for third party, in the format `Bearer {api_key}`") }).optional(), "body": z.object({ "lowerBoundMinutes": z.number().int().describe("Order time lower bound value, in minutes.").optional(), "upperBoundMinutes": z.number().int().describe("Order time upper bound value, in minutes.").optional() }).describe("Request object for order time update").optional() }).shape