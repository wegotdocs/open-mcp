import { z } from "zod"

export const toolName = `globalpageload`
export const toolDescription = `Gets page load (or an API call) performance from a specified global geography such as Paris, Tokyo, Virginia, Mumbai, Frankfurt, London, Seoul, California, Sao Paolo, and many more.`
export const baseUrl = `https://api.interzoid.com`
export const path = `/globalpageload`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "license": z.string().describe("Your Interzoid license API key. Register at www.interzoid.com/register"), "origin": z.string().describe("Geographic location to perform the measurement from (Paris, Hong Kong, Seoul, Mumbai, Sao Paolo, London, etc. see API home page for full list)"), "url": z.string().describe("specific URL to perform load test time") }).optional() }).shape