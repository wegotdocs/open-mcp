import { z } from "zod"

export const toolName = `delete_consumers_tenant_me_communication_preferences_type_subscr`
export const toolDescription = `Remove subscription of a specific communication preference channel`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/consumers/{tenant}/me/communication-preferences/{type}/subscribedChannels/{channel}`
export const method = `delete`
export const security = []

export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("Request tenant."), "type": z.literal("marketing").describe("The type of communication preference."), "channel": z.string().describe("The channel.") }).optional() }).shape