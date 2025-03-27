import { z } from "zod"

export const toolName = `get_get_list_page_`
export const toolDescription = ``
export const baseUrl = `https://api.mineskin.org`
export const path = `/get/list/{page}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "page": z.number().describe("For reference pagination, the uuid of the last skin in the previous page. For numeric pagination (deprecated), the page number or 'start'.") }).optional(), "header": z.object({ "User-Agent": z.string().describe("Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples") }).optional() }).shape