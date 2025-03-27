import { z } from "zod"

export const toolName = `retrievepricingallcountries`
export const toolDescription = `Retrieve outbound pricing for all countries.`
export const baseUrl = `https://rest.nexmo.com/account`
export const path = `/get-full-pricing/outbound/{type}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "type": z.string().describe("The type of service you wish to retrieve data about: either `sms`, `sms-transit` or `voice`.") }).optional(), "query": z.object({ "api_key": z.string().describe("Your Nexmo API key."), "api_secret": z.string().describe("Your Nexmo API secret.") }).optional() }).shape