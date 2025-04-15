import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getfilenodes",
  "toolDescription": "Get file JSON for specific nodes",
  "baseUrl": "https://api.figma.com",
  "path": "/v1/files/{file_key}/nodes",
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
      "ids": "ids",
      "version": "version",
      "depth": "depth",
      "geometry": "geometry",
      "plugin_data": "plugin_data"
    }
  },
  inputParamsSchema
}

export default tool