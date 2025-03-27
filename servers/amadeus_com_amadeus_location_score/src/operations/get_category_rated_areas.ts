import { z } from "zod"

export const toolName = `get_category_rated_areas`
export const toolDescription = `GET category rated areas`
export const baseUrl = `https://test.api.amadeus.com/v1`
export const path = `/location/analytics/category-rated-areas`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "latitude": z.number().describe("Latitude in decimal coordinates"), "longitude": z.number().describe("Longitude in decimal coordinates") }).optional() }).shape