import { z } from "zod"

export const toolName = `meteringpost`
export const toolDescription = `Meter Reading`
export const baseUrl = `https://api.corrently.io/v2.0`
export const path = `/metering/reading`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "1.8.0": z.number().int().describe("Meter Reading (prefered in Wh)").optional(), "account": z.string().describe("Stromkonto account (address) associated with this metering.").optional(), "energy": z.number().int().describe("Alias for 1.8.0").optional(), "secret": z.string().describe("Some private password you might choose on first update. However you need to use the same secret on every further posts.").optional(), "value": z.number().int().describe("Alias for 1.8.0").optional(), "zip": z.string().describe("Zipcode (Postleitzahl) of metered location").optional() }).optional() }).shape