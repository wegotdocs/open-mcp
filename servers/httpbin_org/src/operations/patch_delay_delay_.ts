import { z } from "zod"

export const toolName = `patch_delay_delay_`
export const toolDescription = `Returns a delayed response (max of 10 seconds).`
export const baseUrl = `https://httpbin.org`
export const path = `/delay/{delay}`
export const method = `patch`
export const security = []

export const inputParams = z.object({ "path": z.object({ "delay": z.number().int() }).optional() }).shape