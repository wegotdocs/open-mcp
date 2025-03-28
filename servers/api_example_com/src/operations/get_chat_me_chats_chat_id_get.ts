import { z } from "zod"

export const toolName = `get_chat_me_chats_chat_id_get`
export const toolDescription = `Get Chat`
export const baseUrl = `https://api.example.com`
export const path = `/me/chats/{chat_id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "chat_id": z.string() }).optional() }).shape