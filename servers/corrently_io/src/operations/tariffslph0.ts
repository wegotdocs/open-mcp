import { z } from "zod"

export const toolName = `tariffslph0`
export const toolDescription = `Energy Tariff information`
export const baseUrl = `https://api.corrently.io/v2.0`
export const path = `/tariff/slph0`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "zipcode": z.string().describe("Zipcode (Postzleitzahl) of a city in Germany.").optional() }).optional() }).shape