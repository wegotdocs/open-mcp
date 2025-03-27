import { z } from "zod"

export const toolName = `get_delivery_estimate`
export const toolDescription = `Get delivery estimate`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/delivery/estimate`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "restaurantReference": z.string().describe("The reference of the restaurant to estimate the delivery time from."), "toLat": z.string().describe("The latitude of the position to estimate the delivery time to.").optional(), "toLon": z.string().describe("The longitude of the position to estimate the delivery time to.").optional(), "toPostcode": z.string().describe("The postcode to estimate the delivery time to.").optional() }).optional() }).shape