import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getlabel",
  "toolDescription": "Get a label by ID",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/labels/{labelId}",
  "method": "get",
  "security": [
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "labelId": "labelId"
    },
    "query": {
      "organisation_id": "organisation_id",
      "workspace_id": "workspace_id"
    }
  },
  inputParamsSchema
}

export default tool