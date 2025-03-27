import { z } from "zod"

export const toolName = `get_headers`
export const toolDescription = `Return the incoming request's HTTP headers.`
export const baseUrl = `https://httpbin.org`
export const path = `/headers`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape