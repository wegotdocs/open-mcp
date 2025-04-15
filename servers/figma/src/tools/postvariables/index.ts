import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postvariables",
  "toolDescription": "Create/modify/delete variables",
  "baseUrl": "https://api.figma.com",
  "path": "/v1/files/{file_key}/variables",
  "method": "post",
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
    "body": {
      "variableCollections": "variableCollections",
      "variableModes": "variableModes",
      "variables": "variables",
      "variableModeValues": "variableModeValues"
    }
  },
  inputParamsSchema
}

export default tool