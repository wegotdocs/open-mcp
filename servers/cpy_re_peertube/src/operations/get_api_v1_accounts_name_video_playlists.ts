import { z } from "zod"

export const toolName = `get_api_v1_accounts_name_video_playlists`
export const toolDescription = `List playlists of an account`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/accounts/{name}/video-playlists`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "name": z.string().describe("The username or handle of the account") }).optional(), "query": z.object({ "start": z.number().int().gte(0).describe("Offset used to paginate results").optional(), "count": z.number().int().gte(1).lte(100).describe("Number of items to return"), "sort": z.string().describe("Sort column").optional(), "search": z.string().describe("Plain text search, applied to various parts of the model depending on endpoint").optional(), "playlistType": z.union([z.literal(1), z.literal(2)]).describe("The video playlist type (Regular = `1`, Watch Later = `2`)").optional() }).optional() }).shape