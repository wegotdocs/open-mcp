import { z } from "zod"

export const toolName = `searchflightoffers`
export const toolDescription = `Return list of Flight Offers based on posted searching criteria.`
export const baseUrl = `https://test.api.amadeus.com/v2`
export const path = `/shopping/flight-offers`
export const method = `post`
export const security = []

export const inputParams = z.object({ "header": z.object({ "X-HTTP-Method-Override": z.string().describe("the HTTP method to apply") }).optional() }).shape