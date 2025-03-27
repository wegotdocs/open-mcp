import { z } from "zod"

export const toolName = `get_restaurants_tenant_restaurantid_catalogue_items_itemid_modif`
export const toolDescription = `Get all menu item modifier groups`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/restaurants/{tenant}/{restaurantId}/catalogue/items/{itemId}/modifiergroups`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("Request tenant"), "restaurantId": z.string().describe("The restaurant ID"), "itemId": z.string().describe("The menu item ID") }).optional(), "query": z.object({ "limit": z.number().int().describe("The maximum number of menu items to fetch."), "after": z.string().describe("Value representing a cursor - position to use when retrieving the next page of data. If provided, the value of this parameter must be URL encoded.").optional() }).optional() }).shape