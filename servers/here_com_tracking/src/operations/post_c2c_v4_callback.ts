import { z } from "zod"

export const toolName = `post_c2c_v4_callback`
export const toolDescription = `Receives external device update reports`
export const baseUrl = `https://tracking.api.here.com`
export const path = `/c2c/v4/callback`
export const method = `post`
export const security = []

export const inputParams = z.object({ "query": z.object({ "apiKey": z.string().min(1).max(100).describe("API Key") }).optional(), "body": z.record(z.any()).optional() }).shape