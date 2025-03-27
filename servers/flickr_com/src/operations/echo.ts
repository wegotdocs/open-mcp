import { z } from "zod"

export const toolName = `echo`
export const toolDescription = `Echos the input parameters back in the response`
export const baseUrl = `https://api.flickr.com/services`
export const path = `/rest?method=flickr.test.echo`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "api_key": z.string(), "echo": z.string().optional() }).optional() }).shape