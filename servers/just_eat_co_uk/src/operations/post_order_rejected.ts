import { z } from "zod"

export const toolName = `post_order_rejected`
export const toolDescription = `Order rejected`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/order-rejected`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "Event": z.string().optional(), "RejectedAt": z.string().datetime({ offset: true }).optional(), "RejectedBy": z.string().optional(), "RejectedReason": z.string().optional() }).optional() }).shape