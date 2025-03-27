import { z } from "zod"

export const toolName = `get_stream_n_`
export const toolDescription = `Stream n JSON responses`
export const baseUrl = `https://httpbin.org`
export const path = `/stream/{n}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "n": z.number().int() }).optional() }).shape