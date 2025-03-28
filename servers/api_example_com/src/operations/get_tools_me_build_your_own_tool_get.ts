import { z } from "zod"

export const toolName = `get_tools_me_build_your_own_tool_get`
export const toolDescription = `Get Tools`
export const baseUrl = `https://api.example.com`
export const path = `/me/build-your-own-tool`
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