import { z } from "zod"

export const toolName = `post_orders_orderid_complete`
export const toolDescription = `Complete order`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/orders/{orderId}/complete`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "orderId": z.string().describe("The ID of the order to mark as complete") }).optional() }).shape