import { z } from "zod"

export const toolName = `get_base64_value_`
export const toolDescription = `Decodes base64url-encoded string.`
export const baseUrl = `https://httpbin.org`
export const path = `/base64/{value}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "value": z.string() }).optional() }).shape