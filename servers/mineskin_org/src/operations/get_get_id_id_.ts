import { z } from "zod"

export const toolName = `get_get_id_id_`
export const toolDescription = `Deprecated. Use /get/uuid instead.`
export const baseUrl = `https://api.mineskin.org`
export const path = `/get/id/{id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.number() }).optional(), "header": z.object({ "User-Agent": z.string().describe("Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples") }).optional() }).shape