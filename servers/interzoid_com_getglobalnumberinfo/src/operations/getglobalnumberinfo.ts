import { z } from "zod"

export const toolName = `getglobalnumberinfo`
export const toolDescription = `Get demographic information for a global telephone number`
export const baseUrl = `https://api.interzoid.com`
export const path = `/getglobalnumberinfo`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "license": z.string().describe("Your Interzoid license API key. Register at www.interzoid.com/register"), "intlnumber": z.string().describe("International number (with country code) to retrieve information for") }).optional() }).shape