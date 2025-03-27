import { z } from "zod"

export const toolName = `searchbylocation`
export const toolDescription = `Get restaurants by location`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/restaurants/bylatlong`
export const method = `get`
export const security = []

export const inputParams = z.object({ "header": z.object({ "Authorization": z.string().describe("OAuth2 token issued for logged in consumer or API key issued to partner"), "Accept-Tenant": z.string().describe("A valid country code, e.g. \"uk\". Filter search results to only include restaurants for the specified country. Required when using OAuth for authentication.").optional() }).optional(), "query": z.object({ "latitude": z.number().describe("Filter search results to only include restaurants that deliver to the specified location"), "longitude": z.number().describe("Filter search results to only include restaurants that deliver to the specified location"), "cuisine": z.string().describe("Filter search results to only include restaurants that offer the specified cuisine").optional(), "restaurantName": z.string().describe("Filter search results to only include restaurants that have a name that matches the specified value").optional(), "brandName": z.string().describe("Filter search results to only include restaurants of the specified brand").optional() }).optional() }).shape