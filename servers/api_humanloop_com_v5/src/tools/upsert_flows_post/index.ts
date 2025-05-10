import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "upsert_flows_post",
  "toolDescription": "Upsert Flow",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/flows",
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
      "attributes": "attributes",
      "version_name": "version_name",
      "version_description": "version_description"
    }
  },
  inputParamsSchema
}

export default tool