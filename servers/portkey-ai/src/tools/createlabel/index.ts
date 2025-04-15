import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createlabel",
  "toolDescription": "Create a new label",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/labels",
  "method": "post",
  "security": [
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "organisation_id": "organisation_id",
      "workspace_id": "workspace_id",
      "name": "name",
      "description": "description",
      "color_code": "color_code"
    }
  },
  inputParamsSchema
}

export default tool