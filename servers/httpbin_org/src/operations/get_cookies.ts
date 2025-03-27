import { z } from "zod"

export const toolName = `get_cookies`
export const toolDescription = `Returns cookie data.`
export const baseUrl = `https://httpbin.org`
export const path = `/cookies`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape