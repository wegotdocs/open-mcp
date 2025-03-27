import { z } from "zod"

export const toolName = `getcountrystandard`
export const toolDescription = `Gets country name standard`
export const baseUrl = `https://api.interzoid.com`
export const path = `/getcountrystandard`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "license": z.string().describe("Your Interzoid license API key. Register at www.interzoid.com/register"), "country": z.string().describe("Country name from which to retrieve the standardized version") }).optional() }).shape