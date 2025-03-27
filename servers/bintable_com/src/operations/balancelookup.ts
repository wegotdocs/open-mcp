import { z } from "zod"

export const toolName = `balancelookup`
export const toolDescription = `Check Balance`
export const baseUrl = `https://api.bintable.com/v1`
export const path = `/balance`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "api_key": z.string().describe("The API key, which you can get from bintable.com website.") }).optional() }).shape