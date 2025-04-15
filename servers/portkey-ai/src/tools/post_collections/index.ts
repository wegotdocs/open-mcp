import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_collections",
  "toolDescription": "Create a new collection",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/collections",
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
      "parent_collection_id": "parent_collection_id"
    }
  },
  inputParamsSchema
}

export default tool