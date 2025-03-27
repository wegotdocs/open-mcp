import { z } from "zod"

export const toolName = `registersender`
export const toolDescription = `Register an email sender`
export const baseUrl = `https://api.nexmo.com`
export const path = `/account/register-sender`
export const method = `post`
export const security = []

export const inputParams = z.object({ "query": z.object({ "api_key": z.string().describe("Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com)"), "api_secret": z.string().describe("Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com)") }).optional(), "body": z.object({ "application_ids": z.record(z.any()).describe("An optional array of additional ApplicationID's that the value is to be assigned to.").optional(), "name": z.string().describe("An optional name to be attached to this binding").optional(), "provider": z.literal("email").describe("The delivery method by which the value would be assigned. Always `email`"), "value": z.string().email().describe("The email adress to attach to the application(s)") }).optional() }).shape