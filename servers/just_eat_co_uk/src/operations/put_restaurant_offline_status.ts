import { z } from "zod"

export const toolName = `put_restaurant_offline_status`
export const toolDescription = `Restaurant Offline Status`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/restaurant-offline-status`
export const method = `put`
export const security = []

export const inputParams = z.object({ "body": z.object({ "AllowRestaurantOverride": z.boolean().nullable().describe("Whether a restaurant should be allowed to reverse this offline status change through calls to the Restaurant Events endpoints.").optional(), "IsOffline": z.boolean().describe("Represents the current offline status of the restaurant.").optional(), "RestaurantId": z.string().describe("The unique identifier of the restaurant that has their offline status changed.").optional(), "Tenant": z.enum(["au","dk","es","ie","it","no","uk","nz"]).describe("The two letter country code for the market in which the restaurant operates.").optional() }).optional() }).shape