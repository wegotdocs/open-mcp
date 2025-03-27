import { z } from "zod"

export const toolName = `get_restaurants_tenant_restaurantid_catalogue`
export const toolDescription = `Get product catalogue`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/restaurants/{tenant}/{restaurantId}/catalogue`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("Request tenant."), "restaurantId": z.string().describe("The restaurant Id.") }).optional() }).shape