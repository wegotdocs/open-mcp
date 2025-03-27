import { z } from "zod"

export const toolName = `get_links_n_offset_`
export const toolDescription = `Generate a page containing n links to other pages which do the same.`
export const baseUrl = `https://httpbin.org`
export const path = `/links/{n}/{offset}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "n": z.number().int(), "offset": z.number().int() }).optional() }).shape