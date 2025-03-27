import { z } from "zod"

export const toolName = `get_deny`
export const toolDescription = `Returns page denied by robots.txt rules.`
export const baseUrl = `https://httpbin.org`
export const path = `/deny`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape