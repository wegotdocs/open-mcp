import { z } from "zod"

export const toolName = `get_all_chats_me_chats_get`
export const toolDescription = `Get All Chats`
export const baseUrl = `https://api.example.com`
export const path = `/me/chats`
export const method = `get`
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

export const inputParams = z.object({}).shape