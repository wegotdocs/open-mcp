import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createpromptpartial",
  "toolDescription": "Create a new prompt partial",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/prompts/partials",
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
      "workspace_id": "workspace_id",
      "name": "name",
      "string": "string",
      "version_description": "version_description"
    }
  },
  inputParamsSchema
}

export default tool