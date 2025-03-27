import { z } from "zod"

export const toolName = `gsibesthour`
export const toolDescription = `Get best hour (with most regional green energy) in a given timeframe.`
export const baseUrl = `https://api.corrently.io/v2.0`
export const path = `/gsi/bestHour`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "zip": z.string().describe("Zipcode (Postleitzahl) of a city in Germany.").optional(), "key": z.string().describe("Any valid Stromkonto account (address).").optional(), "timeframe": z.number().int().describe("Number of hours to check (default 24 hours from now).").optional(), "hours": z.number().int().describe("How many hours in row do you need the device turned on?").optional() }).optional() }).shape