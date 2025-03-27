import { z } from "zod"

export const toolName = `get_search_autocomplete_tenant_`
export const toolDescription = `Get auto-completed search terms`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/search/autocomplete/{tenant}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("A valid country code, e.g. \"uk\".") }).optional(), "query": z.object({ "searchTerm": z.string().describe("User's search term - at least one character required"), "latlong": z.array(z.number()).min(2).max(2).describe("The latitude and longitude coordinates of the location in which to search.\r\nSpecify the coordinates as latitude,longitude."), "limit": z.number().describe("Limit the number of auto-completed terms returned by the API. Defaults to 7. Valid values 1 - 10").optional() }).optional() }).shape