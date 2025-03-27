import { z } from "zod"

export const toolName = `get_restaurants_tenant_restaurantid_catalogue_availabilities`
export const toolDescription = `Get all availabilities`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/restaurants/{tenant}/{restaurantId}/catalogue/availabilities`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("Request tenant."), "restaurantId": z.string().describe("The restaurant Id.") }).optional(), "query": z.object({ "limit": z.number().int().describe("The maximum number of availabilities to fetch."), "after": z.string().describe("Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.").optional() }).optional() }).shape