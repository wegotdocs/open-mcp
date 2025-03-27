import { z } from "zod"

export const toolName = `get_bytes_n_`
export const toolDescription = `Returns n random bytes generated with given seed`
export const baseUrl = `https://httpbin.org`
export const path = `/bytes/{n}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "n": z.number().int() }).optional() }).shape