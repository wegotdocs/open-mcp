import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getlibraryanalyticsstyleusages",
  "toolDescription": "Get library analytics style usage data.",
  "baseUrl": "https://api.figma.com",
  "path": "/v1/analytics/libraries/{file_key}/style/usages",
  "method": "get",
  "security": [
    {
      "key": "X-Figma-Token",
      "value": "<mcp-env-var>X_FIGMA_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "X_FIGMA_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "file_key": "file_key"
    },
    "query": {
      "cursor": "cursor",
      "group_by": "group_by"
    }
  },
  inputParamsSchema
}

export default tool