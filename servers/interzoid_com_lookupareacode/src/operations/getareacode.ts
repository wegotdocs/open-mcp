import { z } from "zod"

export const toolName = `getareacode`
export const toolDescription = `Gets telephone area code information`
export const baseUrl = `https://api.interzoid.com`
export const path = `/getareacode`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "license": z.string().describe("Your Interzoid license API key. Register at www.interzoid.com/register"), "areacode": z.string().describe("Telephone area code to retrieve area code information") }).optional() }).shape