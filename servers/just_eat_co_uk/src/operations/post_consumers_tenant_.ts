import { z } from "zod"

export const toolName = `post_consumers_tenant_`
export const toolDescription = `Create consumer`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/consumers/{tenant}`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("The identifier for the tenant. The only supported tenants are `uk`, `au` and `nz`") }).optional(), "body": z.object({ "emailAddress": z.string().email().max(160).describe("The consumer's email address"), "firstName": z.string().max(160).describe("The consumer's first name"), "lastName": z.string().max(160).describe("The consumer's last name"), "marketingPreferences": z.array(z.object({ "channelName": z.enum(["Email","Push","Sms"]).describe("The channel name.").optional(), "dateUpdated": z.string().datetime({ offset: true }).describe("The date of the marketing preference change").optional(), "isSubscribed": z.boolean().describe("Should the channel be subscribed to?").optional() })).describe("The selected marketing preferences for the consumer").optional(), "password": z.string().min(4).max(160).describe("The consumer's password").optional(), "registrationSource": z.enum(["Native","Guest"]).describe("The registration source of the consumer. Australia and New Zealand only support Guest") }).optional() }).shape