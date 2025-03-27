import { z } from "zod"

export const toolName = `get_gzip`
export const toolDescription = `Returns GZip-encoded data.`
export const baseUrl = `https://httpbin.org`
export const path = `/gzip`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape