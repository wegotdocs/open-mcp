import { z } from "zod"

export const toolName = `getfavoritescontextbyid`
export const toolDescription = `Returns next and previous favorites for a photo in a user's favorites`
export const baseUrl = `https://api.flickr.com/services`
export const path = `/rest?method=flickr.favorites.getContext`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "api_key": z.string(), "photo_id": z.string().regex(new RegExp("^[0-9]+$")), "user_id": z.string().regex(new RegExp("^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$")).optional() }).optional() }).shape