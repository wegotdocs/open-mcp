import { z } from "zod"

export const toolName = `get_pages_count_json`
export const toolDescription = `Count all Pages.`
export const baseUrl = `https://api.jumpseller.com/v1`
export const path = `/pages/count.json`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional() }).shape