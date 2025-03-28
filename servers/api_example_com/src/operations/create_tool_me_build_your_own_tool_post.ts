import { z } from "zod"

export const toolName = `create_tool_me_build_your_own_tool_post`
export const toolDescription = `Create Tool`
export const baseUrl = `https://api.example.com`
export const path = `/me/build-your-own-tool`
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

export const inputParams = z.object({ "body": z.object({ "code": z.string(), "tool_id": z.string(), "env_variables": z.record(z.any()), "config": z.array(z.object({ "name": z.string(), "items": z.union([z.object({ "type": z.enum(["string","number","integer","boolean"]) }).describe("Array Items"), z.null()]).optional(), "type": z.enum(["string","number","integer","array","boolean"]), "source": z.enum(["llm","user","metadata"]), "label": z.string(), "description": z.string(), "required": z.boolean() }).describe("Tool Arguments")) }).describe("Model for the POST request body to create a BYOT tool.").optional() }).shape