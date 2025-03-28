import { z } from "zod"

export const toolName = `run_tool_me_build_your_own_tool_run_post`
export const toolDescription = `Run Tool`
export const baseUrl = `https://api.example.com`
export const path = `/me/build-your-own-tool/run`
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

export const inputParams = z.object({ "body": z.object({ "tool_id": z.string(), "input": z.record(z.any()) }).describe("Model for the request body to run a BYOT tool.").optional() }).shape