import { z } from "zod"

export const toolName = `proxy_to_customerio_backoffice_events_post`
export const toolDescription = `Proxy To Customerio`
export const baseUrl = `https://api.example.com`
export const path = `/backoffice/events`
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

export const inputParams = z.object({}).shape