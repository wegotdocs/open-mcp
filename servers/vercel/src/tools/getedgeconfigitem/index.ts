import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getedgeconfigitem",
  "toolDescription": "Get an Edge Config item",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/edge-config/{edgeConfigId}/item/{edgeConfigItemKey}",
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
      "edgeConfigItemKey": "edgeConfigItemKey"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool