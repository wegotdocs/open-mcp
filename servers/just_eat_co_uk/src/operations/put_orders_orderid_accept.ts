import { z } from "zod"

export const toolName = `put_orders_orderid_accept`
export const toolDescription = `Accept order`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/orders/{orderId}/accept`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "orderId": z.string() }).optional(), "body": z.object({ "TimeAcceptedFor": z.string().datetime({ offset: true }).optional() }).optional() }).shape