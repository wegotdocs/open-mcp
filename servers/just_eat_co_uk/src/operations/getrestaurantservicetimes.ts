import { z } from "zod"

export const toolName = `getrestaurantservicetimes`
export const toolDescription = `Get service times`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/restaurants/{tenant}/{restaurantId}/servicetimes`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("Two letter code of restaurant's tenant"), "restaurantId": z.string().describe("The restaurant identifier") }).optional() }).shape