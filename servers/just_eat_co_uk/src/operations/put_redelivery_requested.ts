import { z } from "zod"

export const toolName = `put_redelivery_requested`
export const toolDescription = `Customer Requested Redelivery`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/redelivery-requested`
export const method = `put`
export const security = []

export const inputParams = z.object({ "body": z.object({ "Notes": z.string().optional(), "OrderId": z.string().optional(), "Tenant": z.string().optional(), "Update": z.string().optional() }).optional() }).shape