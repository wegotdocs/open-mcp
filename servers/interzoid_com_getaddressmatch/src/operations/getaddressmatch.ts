import { z } from "zod"

export const toolName = `getaddressmatch`
export const toolDescription = `Gets a similarity key for matching purposes for address data`
export const baseUrl = `https://api.interzoid.com`
export const path = `/getaddressmatch`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "license": z.string().describe("Your Interzoid license API key. Register at www.interzoid.com/register"), "address": z.string().describe("Address from which to generate similarity key") }).optional() }).shape