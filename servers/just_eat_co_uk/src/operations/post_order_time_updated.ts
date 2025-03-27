import { z } from "zod"

export const toolName = `post_order_time_updated`
export const toolDescription = `Order time updated`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/order-time-updated`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "dayOfWeek": z.enum(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]).describe("The day of the week that has been updated.").optional(), "lowerBoundMinutes": z.number().int().describe("Order time lower bound value, in minutes.").optional(), "restaurantId": z.string().describe("The Just Eat restaurant ID").optional(), "serviceType": z.enum(["Delivery","Collection"]).describe("Service type of the order time.").optional(), "upperBoundMinutes": z.number().int().describe("Order time upper bound value, in minutes.").optional() }).optional() }).shape