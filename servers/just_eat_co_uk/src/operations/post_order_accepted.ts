import { z } from "zod"

export const toolName = `post_order_accepted`
export const toolDescription = `Order accepted`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/order-accepted`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "AcceptedFor": z.string().datetime({ offset: true }).optional(), "Event": z.string().optional(), "OrderId": z.string().optional() }).optional() }).shape