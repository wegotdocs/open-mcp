import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcomponentset",
  "toolDescription": "Get component set",
  "baseUrl": "https://api.figma.com",
  "path": "/v1/component_sets/{key}",
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
      "key": "key"
    }
  },
  inputParamsSchema
}

export default tool