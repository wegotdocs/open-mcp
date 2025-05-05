import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "export_api_unstable_route",
  "toolDescription": "**WARNING**: this is an unstable route. Breaking changes could happen in future releases.\n\nExports the results of a query as a downloadable file in the specified format.\n\nThe `query` query param is stringified json value that conforms to t",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/export",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "THEHIVE-SESSION",
      "value": "<mcp-env-var>THEHIVE_SESSION</mcp-env-var>",
      "in": "cookie",
      "envVarName": "THEHIVE_SESSION"
    }
  ],
  "paramsMap": {
    "query": {
      "query": "query",
      "options": "options"
    }
  },
  inputParamsSchema
}

export default tool