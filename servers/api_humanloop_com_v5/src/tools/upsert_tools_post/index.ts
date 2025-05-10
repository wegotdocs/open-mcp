import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "upsert_tools_post",
  "toolDescription": "Upsert Tool",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/tools",
  "method": "post",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "path": "path",
      "id": "id",
      "function": "function",
      "source_code": "source_code",
      "setup_values": "setup_values",
      "attributes": "attributes",
      "tool_type": "tool_type",
      "version_name": "version_name",
      "version_description": "version_description"
    }
  },
  inputParamsSchema
}

export default tool