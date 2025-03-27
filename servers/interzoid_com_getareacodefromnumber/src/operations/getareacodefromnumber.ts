import { z } from "zod"

export const toolName = `getareacodefromnumber`
export const toolDescription = `Gets area code information from a telephone number`
export const baseUrl = `https://api.interzoid.com`
export const path = `/getareacodefromnumber`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "license": z.string().describe("Your Interzoid license API key. Register at www.interzoid.com/register"), "number": z.string().describe("Telephone number to retrieve area code information") }).optional() }).shape