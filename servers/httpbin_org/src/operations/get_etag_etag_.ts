import { z } from "zod"

export const toolName = `get_etag_etag_`
export const toolDescription = `Assumes the resource has the given etag and responds to If-None-Match and If-Match headers appropriately.`
export const baseUrl = `https://httpbin.org`
export const path = `/etag/{etag}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "header": z.object({ "If-None-Match": z.string().optional(), "If-Match": z.string().optional() }).optional(), "path": z.object({ "etag": z.string().describe("Automatically added") }).optional() }).shape