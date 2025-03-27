import { z } from "zod"

export const toolName = `post_late_order_compensation_query`
export const toolDescription = `late order compensation query, restaurant response required`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/late-order-compensation-query`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "compensationOptions": z.array(z.object({ "amount": z.number().describe("Cost of the option in local currency").optional(), "isRecommended": z.boolean().describe("Whether this option is the recommended option").optional() }).strict()).describe("List of possible options for compensation").optional(), "orderId": z.string().describe("Just Eat order identifier").optional(), "restaurantId": z.string().describe("Just Eat restaurant identifier").optional(), "tenant": z.string().describe("Tenant (Country) of order restaurant.").optional() }).optional() }).shape