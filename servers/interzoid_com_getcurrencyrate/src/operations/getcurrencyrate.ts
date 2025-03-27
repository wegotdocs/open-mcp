import { z } from "zod"

export const toolName = `getcurrencyrate`
export const toolDescription = `Gets a foreign currency rate for one US Dollar`
export const baseUrl = `https://api.interzoid.com`
export const path = `/getcurrencyrate`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "license": z.string().describe("Your Interzoid license API key. Register at www.interzoid.com/register"), "symbol": z.string().describe("Currency symbol to retrieve current rate for") }).optional() }).shape