import { z } from "zod"

export const toolName = `del_chat_me_chats_chat_id_delete`
export const toolDescription = `Del Chat`
export const baseUrl = `https://api.example.com`
export const path = `/me/chats/{chat_id}`
export const method = `delete`
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

export const inputParams = z.object({ "path": z.object({ "chat_id": z.string() }).optional() }).shape