import { z } from "zod"

export const toolName = `get_chat_og_metadata_me_chats_chat_id_og_get`
export const toolDescription = `Get Chat Og Metadata`
export const baseUrl = `https://api.example.com`
export const path = `/me/chats/{chat_id}/og`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "chat_id": z.string().uuid() }).optional() }).shape