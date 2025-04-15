import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatepromptversion",
  "toolDescription": "Update a specific version of a prompt",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/prompts/{promptId}/versions/{versionId}",
  "method": "put",
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
      "promptId": "promptId",
      "versionId": "versionId"
    },
    "body": {
      "label_id": "label_id"
    }
  },
  inputParamsSchema
}

export default tool