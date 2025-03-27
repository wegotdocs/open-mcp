import { z } from "zod"

export const toolName = `getmediabypersonid`
export const toolDescription = `Return photos from the given user's photostream`
export const baseUrl = `https://api.flickr.com/services`
export const path = `/rest?method=flickr.people.getPhotos`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "api_key": z.string(), "user_id": z.string(), "safe_search": z.number().optional(), "min_upload_date": z.number().optional(), "max_upload_date": z.number().optional(), "min_taken_date": z.number().optional(), "max_taken_date": z.number().optional(), "content_type": z.number().optional(), "privacy_filter": z.number().optional(), "page": z.number().optional(), "per_page": z.number().optional() }).optional() }).shape