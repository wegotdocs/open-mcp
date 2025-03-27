import { z } from "zod"

export const toolName = `patch_status_codes_`
export const toolDescription = `Return status code or random status code if more than one are given`
export const baseUrl = `https://httpbin.org`
export const path = `/status/{codes}`
export const method = `patch`
export const security = []

export const inputParams = z.object({ "path": z.object({ "codes": z.string() }).optional() }).shape