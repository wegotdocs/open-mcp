import { z } from "zod"

export const toolName = `getemailinfo`
export const toolDescription = `Gets email validation information for an email address`
export const baseUrl = `https://api.interzoid.com`
export const path = `/getemailinfo`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "license": z.string().describe("Your Interzoid license API key. Register at www.interzoid.com/register"), "email": z.string().describe("Email address to retrieve validation information") }).optional() }).shape