import { z } from "zod"

export const toolName = `tariffcomponents`
export const toolDescription = `Energy Tariff price components`
export const baseUrl = `https://api.corrently.io/v2.0`
export const path = `/tariff/components`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "zipcode": z.string().describe("Zipcode (Postzleitzahl) of a city in Germany.").optional(), "email": z.string().describe("Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time").optional(), "kwha": z.number().int().describe("Total amount of energy in kilo-watt-hours per year. (sample 2100)").optional(), "milliseconds": z.number().int().describe("If provided all results will be scaled to this timeframe").optional(), "wh": z.number().int().describe("If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created.").optional() }).optional() }).shape