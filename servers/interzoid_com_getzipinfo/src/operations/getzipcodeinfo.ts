import { z } from "zod"

export const toolName = `getzipcodeinfo`
export const toolDescription = `Gets detailed zip code information`
export const baseUrl = `https://api.interzoid.com`
export const path = `/getzipcodeinfo`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "license": z.string().describe("Your Interzoid license API key. Register at www.interzoid.com/register"), "zip": z.string().describe("Zip code to retrieve detailed information") }).optional() }).shape