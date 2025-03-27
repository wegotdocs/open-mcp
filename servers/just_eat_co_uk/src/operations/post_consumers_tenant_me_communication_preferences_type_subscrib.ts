import { z } from "zod"

export const toolName = `post_consumers_tenant_me_communication_preferences_type_subscrib`
export const toolDescription = `Subscribe to a specific communication preference channel`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/consumers/{tenant}/me/communication-preferences/{type}/subscribedChannels/{channel}`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("Request tenant."), "type": z.literal("marketing").describe("The type of communication preferences."), "channel": z.enum(["email","sms","push"]).describe("The channel.") }).optional() }).shape