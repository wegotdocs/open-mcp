import { z } from "zod"

export const toolName = `get_api_v1_accounts_name_video_channel_syncs`
export const toolDescription = `List the synchronizations of video channels of an account`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/accounts/{name}/video-channel-syncs`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "name": z.string().describe("The username or handle of the account") }).optional(), "query": z.object({ "start": z.number().int().gte(0).describe("Offset used to paginate results").optional(), "count": z.number().int().gte(1).lte(100).describe("Number of items to return"), "sort": z.string().describe("Sort column").optional() }).optional() }).shape