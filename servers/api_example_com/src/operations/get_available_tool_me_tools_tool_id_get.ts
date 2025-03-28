import { z } from "zod"

export const toolName = `get_available_tool_me_tools_tool_id_get`
export const toolDescription = `Get Available Tool`
export const baseUrl = `https://api.example.com`
export const path = `/me/tools/{tool_id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "tool_id": z.string() }).optional() }).shape