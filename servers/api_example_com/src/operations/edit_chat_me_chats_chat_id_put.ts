import { z } from "zod"

export const toolName = `edit_chat_me_chats_chat_id_put`
export const toolDescription = `Edit Chat`
export const baseUrl = `https://api.example.com`
export const path = `/me/chats/{chat_id}`
export const method = `put`
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

export const inputParams = z.object({ "path": z.object({ "chat_id": z.string() }).optional(), "body": z.object({ "id": z.union([z.string().uuid(), z.null()]).optional(), "user_id": z.union([z.string(), z.null()]).optional(), "original_chat_id": z.union([z.string().uuid(), z.null()]).optional(), "created_at": z.union([z.string().datetime({ offset: true }), z.null()]).optional(), "updated_at": z.union([z.string().datetime({ offset: true }), z.null()]).optional(), "title": z.union([z.string(), z.null()]).optional(), "public": z.union([z.boolean(), z.null()]), "history": z.union([z.array(z.record(z.any())), z.null()]), "vars": z.union([z.record(z.string()), z.null()]).optional(), "prompt": z.union([z.string(), z.null()]).optional() }).optional() }).shape