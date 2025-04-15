import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getedgeconfigtoken",
  "toolDescription": "Get Edge Config token meta data",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/edge-config/{edgeConfigId}/token/{token}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "edgeConfigId": "edgeConfigId",
      "token": "token"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool