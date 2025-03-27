import { z } from "zod"

export const toolName = `put_restaurants_driver_eta`
export const toolDescription = `Set ETA for pickup`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/restaurants/driver/eta`
export const method = `put`
export const security = []

export const inputParams = z.object({ "body": z.array(z.object({ "etaAtRestaurant": z.number().describe("Your best estimation in minutes").optional(), "restaurantId": z.string().describe("The unique identifier of the restaurant.").optional() })).optional() }).shape