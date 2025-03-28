import { z } from "zod"

export const toolName = `get_tools_endpoint_v1_get_tools_post`
export const toolDescription = `Get Tools Endpoint`
export const baseUrl = `https://api.example.com`
export const path = `/v1/get_tools`
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

export const inputParams = z.object({ "body": z.object({ "metadata": z.union([z.record(z.any()), z.null()]).optional(), "provider": z.enum(["openai","anthropic","vercel","llamaindex"]), "bundle": z.union([z.string(), z.null()]).optional() }).describe("Represents a tool call for Toolhouse.").optional() }).shape