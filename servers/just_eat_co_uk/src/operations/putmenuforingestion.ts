import { z } from "zod"

export const toolName = `putmenuforingestion`
export const toolDescription = `Create or update a menu`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/restaurants/{tenant}/{restaurantId}/menu`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("The tenant of the restaurant in which to put a menu"), "restaurantId": z.string().describe("The restaurant identifier to associated with the menu") }).optional(), "header": z.object({ "Authorization": z.string().describe("Containing a partner issued API key e.g. `JE-API-KEY ABCDE123456789`"), "Content-Type": z.string().describe("Used to denote the version of the menu payload within the body, will default to latest if not supplied e.g. application/=1.0").optional() }).optional(), "body": z.string().optional() }).shape