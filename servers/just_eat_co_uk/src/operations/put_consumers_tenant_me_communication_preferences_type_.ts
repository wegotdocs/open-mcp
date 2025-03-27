import { z } from "zod"

export const toolName = `put_consumers_tenant_me_communication_preferences_type_`
export const toolDescription = `Set only the channel subscriptions for a given consumer's communication preference type`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/consumers/{tenant}/me/communication-preferences/{type}`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("Request tenant."), "type": z.literal("marketing").describe("The type of communication preferences.") }).optional(), "body": z.object({ "subscribedChannels": z.array(z.enum(["email","sms","push"])).describe("The list of channels that the consumer should only be subscribed to.").optional() }).optional() }).shape