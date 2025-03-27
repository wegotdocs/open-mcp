import { z } from "zod"

export const toolName = `put_order_is_ready_for_pickup`
export const toolDescription = `Order ready for pickup`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/order-is-ready-for-pickup`
export const method = `put`
export const security = []

export const inputParams = z.object({ "body": z.object({ "Event": z.literal("Ready for pickup").optional(), "Timestamp": z.string().datetime({ offset: true }).optional() }).optional() }).shape