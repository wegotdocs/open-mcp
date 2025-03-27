import { z } from "zod"

export const toolName = `binlookup`
export const toolDescription = `Lookup for bin`
export const baseUrl = `https://api.bintable.com/v1`
export const path = `/{bin}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "bin": z.string().describe("pass the required BIN code") }).optional(), "query": z.object({ "api_key": z.string().describe("The API key, which you can get from bintable.com website.") }).optional() }).shape