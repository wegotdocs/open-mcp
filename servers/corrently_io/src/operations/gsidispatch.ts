import { z } from "zod"

export const toolName = `gsidispatch`
export const toolDescription = `Dispatch (Green Energy Distribution Schedule)`
export const baseUrl = `https://api.corrently.io/v2.0`
export const path = `/gsi/dispatch`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "zip": z.string().describe("Zipcode (Postleitzahl) of a city in Germany.").optional(), "key": z.string().describe("Any valid Stromkonto account (address).").optional() }).optional() }).shape