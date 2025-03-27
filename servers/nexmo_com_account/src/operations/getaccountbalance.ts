import { z } from "zod"

export const toolName = `getaccountbalance`
export const toolDescription = `Get Account Balance`
export const baseUrl = `https://api.nexmo.com`
export const path = `/account/get-balance`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "api_key": z.string().describe("Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com)"), "api_secret": z.string().describe("Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com)") }).optional() }).shape