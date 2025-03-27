import { z } from "zod"

export const toolName = `retrieveprefixpricing`
export const toolDescription = `Retrieve outbound pricing for a specific dialing prefix.`
export const baseUrl = `https://rest.nexmo.com/account`
export const path = `/get-prefix-pricing/outbound/{type}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "type": z.string().describe("The type of service you wish to retrieve data about: either `sms`, `sms-transit` or `voice`.") }).optional(), "query": z.object({ "api_key": z.string().describe("Your Nexmo API key."), "api_secret": z.string().describe("Your Nexmo API secret."), "prefix": z.string().describe("The numerical dialing prefix to look up pricing for. Examples include 44, 1 and so on.") }).optional() }).shape