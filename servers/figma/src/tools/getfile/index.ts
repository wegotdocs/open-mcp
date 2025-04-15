import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getfile",
  "toolDescription": "Get file JSON",
  "baseUrl": "https://api.figma.com",
  "path": "/v1/files/{file_key}",
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
      "version": "version",
      "ids": "ids",
      "depth": "depth",
      "geometry": "geometry",
      "plugin_data": "plugin_data",
      "branch_data": "branch_data"
    }
  },
  inputParamsSchema
}

export default tool