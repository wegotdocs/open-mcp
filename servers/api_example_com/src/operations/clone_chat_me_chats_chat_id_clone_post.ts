import { z } from "zod"

export const toolName = `clone_chat_me_chats_chat_id_clone_post`
export const toolDescription = `Clone Chat`
export const baseUrl = `https://api.example.com`
export const path = `/me/chats/{chat_id}/clone`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "path": z.object({ "chat_id": z.string().uuid() }).optional() }).shape