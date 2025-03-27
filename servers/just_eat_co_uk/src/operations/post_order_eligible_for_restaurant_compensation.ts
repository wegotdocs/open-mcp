import { z } from "zod"

export const toolName = `post_order_eligible_for_restaurant_compensation`
export const toolDescription = `Order Eligible For Restaurant Compensation`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/order-eligible-for-restaurant-compensation`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "IsEligible": z.boolean().describe("Flag that informs if the cancelled order is eligible for compensation").optional(), "OrderId": z.string().describe("Id for the order").optional() }).optional() }).shape