import { z } from "zod"

export const toolName = `get_cache`
export const toolDescription = `Returns a 304 if an If-Modified-Since header or If-None-Match is present. Returns the same as a GET otherwise.`
export const baseUrl = `https://httpbin.org`
export const path = `/cache`
export const method = `get`
export const security = []

export const inputParams = z.object({ "header": z.object({ "If-Modified-Since": z.string().optional(), "If-None-Match": z.string().optional() }).optional() }).shape