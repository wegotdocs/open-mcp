import { z } from "zod"

export const toolName = `get_anything_anything_`
export const toolDescription = `Returns anything passed in request data.`
export const baseUrl = `https://httpbin.org`
export const path = `/anything/{anything}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "anything": z.string().describe("Automatically added") }).optional() }).shape