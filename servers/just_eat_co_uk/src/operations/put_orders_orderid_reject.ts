import { z } from "zod"

export const toolName = `put_orders_orderid_reject`
export const toolDescription = `Reject order`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/orders/{orderId}/reject`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "orderId": z.string() }).optional(), "body": z.object({ "Message": z.string().describe("Reason why this order is being rejected.").optional() }).optional() }).shape