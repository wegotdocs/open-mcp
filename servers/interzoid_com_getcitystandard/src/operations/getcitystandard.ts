import { z } from "zod"

export const toolName = `getcitystandard`
export const toolDescription = `Gets a city name standard for US and international cities`
export const baseUrl = `https://api.interzoid.com`
export const path = `/getcitystandard`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "license": z.string().describe("Your Interzoid license API key. Register at www.interzoid.com/register"), "city": z.string().describe("City name from which to retrieve the standardized version") }).optional() }).shape