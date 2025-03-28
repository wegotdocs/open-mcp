import { z } from "zod"

export const toolName = `run_tools_endpoint_v1_run_tools_post`
export const toolDescription = `Run Tools Endpoint`
export const baseUrl = `https://api.example.com`
export const path = `/v1/run_tools`
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

export const inputParams = z.object({ "body": z.object({ "metadata": z.object({ "toolhouse_id": z.union([z.string(), z.null()]), "toolhouse_timezone": z.union([z.number(), z.null()]) }).describe("Metadata Model"), "provider": z.enum(["openai","anthropic","vercel","llamaindex"]), "content": z.union([z.object({ "id": z.string(), "input": z.record(z.any()), "name": z.string(), "type": z.literal("tool_use") }).describe("Represents a tool call for Anthropic."), z.object({ "id": z.string(), "function": z.object({ "arguments": z.record(z.any()), "name": z.string() }).describe("Represents a function call for OpenAI."), "type": z.literal("function") }).describe("Represents a tool call for OpenAI."), z.object({ "input": z.record(z.any()), "name": z.string() }).describe("Represents a tool call for Generic.")]), "bundle": z.union([z.string(), z.null()]).optional() }).describe("Represents a tool call for Toolhouse.").optional() }).shape