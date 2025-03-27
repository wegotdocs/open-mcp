import { z } from "zod"

export const toolName = `get_drip`
export const toolDescription = `Drips data over a duration after an optional initial delay.`
export const baseUrl = `https://httpbin.org`
export const path = `/drip`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "duration": z.number().describe("The amount of time (in seconds) over which to drip each byte"), "numbytes": z.number().int().describe("The number of bytes to respond with"), "code": z.number().int().describe("The response code that will be returned"), "delay": z.number().describe("The amount of time (in seconds) to delay before responding") }).optional() }).shape