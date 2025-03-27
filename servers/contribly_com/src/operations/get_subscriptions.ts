import { z } from "zod"

export const toolName = `get_subscriptions`
export const toolDescription = `List subscriptions for the authorised user.`
export const baseUrl = `https://api.contribly.com/1`
export const path = `/subscriptions`
export const method = `get`
export const security = []

export const inputParams = z.object({ "body": z.object({ "assignment": z.string().optional(), "email": z.string().optional(), "includeBody": z.boolean(), "includeThumbenail": z.boolean().optional(), "slackChannel": z.string().optional(), "types": z.array(z.string()) }).optional() }).shape