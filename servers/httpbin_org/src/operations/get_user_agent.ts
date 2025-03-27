import { z } from "zod"

export const toolName = `get_user_agent`
export const toolDescription = `Return the incoming requests's User-Agent header.`
export const baseUrl = `https://httpbin.org`
export const path = `/user-agent`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape