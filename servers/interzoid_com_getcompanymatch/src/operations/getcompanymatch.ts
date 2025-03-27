import { z } from "zod"

export const toolName = `getcompanymatch`
export const toolDescription = `Gets a similarity key for matching purposes for company name data`
export const baseUrl = `https://api.interzoid.com`
export const path = `/getcompanymatch`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "license": z.string().describe("Your Interzoid license API key. Register at www.interzoid.com/register"), "company": z.string().describe("Company name from which to generate similarity key") }).optional() }).shape